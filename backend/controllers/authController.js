const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_terminal_key';

exports.login = async (req, res) => {
  try {
    const { operatorId, accessKey } = req.body;

    // For demo purposes: allow role-based direct login if operatorId matches a role
    const validRoles = ['SA', 'MGR', 'CSH', 'TECH', 'INV', 'AUD'];

    let user;
    if (validRoles.includes(operatorId)) {
      // Find any user with this role for the demo
      user = await User.findOne({ role: operatorId });
    } else {
      user = await User.findOne({ operatorId });
    }

    if (!user) {
      return res.status(401).json({ message: 'Invalid operator ID or access key' });
    }

    // Always check the access key for realism
    const isMatch = await bcrypt.compare(accessKey, user.accessKey);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid operator ID or access key' });
    }

    if (!user) {
       return res.status(401).json({ message: 'User not found for role demo' });
    }

    const token = jwt.sign(
      { id: user._id, operatorId: user.operatorId, role: user.role },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({
      token,
      user: {
        id: user.operatorId,
        name: user.name,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
