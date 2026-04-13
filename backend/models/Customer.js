const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  loyaltyPoints: { type: Number, default: 0 },
  tier: { type: String, enum: ['Silver', 'Gold', 'VIP'], default: 'Silver' },
  credit: { type: Number, default: 0 },
  familyMembers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Customer' }],
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  accountFrozen: { type: Boolean, default: false },
  consent: { type: Boolean, default: true } // Marketing opt-in log
}, { timestamps: true });

module.exports = mongoose.model('Customer', customerSchema);
