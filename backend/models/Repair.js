const mongoose = require('mongoose');

const repairSchema = new mongoose.Schema({
  ticketId: { type: String, required: true, unique: true },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  deviceModel: { type: String, required: true },
  imei: { type: String },
  damageMap: { type: Object }, // e.g. { "screen": "cracked", "back": "scratched" }
  symptoms: [{ type: String }],
  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'QC', 'Ready', 'Collected', 'Rework', 'Cancelled'],
    default: 'Pending'
  },
  technicianId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  qcChecklistVersion: { type: Number },
  depositAmount: { type: Number, default: 0 },
  photos: [{ type: String }], // URLs or base64
  notes: { type: String }, // Internal notes
  customerNotes: { type: String }, // Customer visible notes
  completedAt: { type: Date },
  storeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Store' }
}, { timestamps: true });

module.exports = mongoose.model('Repair', repairSchema);
