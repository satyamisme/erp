const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_terminal_key';

exports.login = async (req, res) => {
  try {
    const { operatorId, accessKey } = req.body;

    const user = await User.findOne({ operatorId });
    if (!user) {
      return res.status(401).json({ message: 'Invalid operator ID or access key' });
    }

    const isMatch = await bcrypt.compare(accessKey, user.accessKey);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid operator ID or access key' });
    }

    const token = jwt.sign(
      { id: user._id, operatorId: user.operatorId, role: user.role },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({
      token,
      user: {
        operatorId: user.operatorId,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
