const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  operatorId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  accessKey: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['operator', 'manager', 'admin'],
    default: 'operator',
  }
});

module.exports = mongoose.model('User', userSchema);
