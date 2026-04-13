const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  operatorId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  accessKey: { type: String }, // For the operator authentication (like a PIN or specific key)
  name: { type: String, required: true },
  role: { type: String, enum: ['SA', 'MGR', 'CSH', 'TECH', 'INV', 'AUD'], required: true },
  permissions: [{ type: Number }], // Array of feature IDs
  homeStoreId: { type: mongoose.Schema.Types.ObjectId, ref: 'Store' },
  roamingStores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Store' }],
  managerPinHash: { type: String }, // Hashed 4-digit PIN
  twoFactorSecret: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
