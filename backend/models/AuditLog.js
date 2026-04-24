const mongoose = require('mongoose');

const auditLogSchema = new mongoose.Schema({
  action: { type: String, required: true }, // e.g. "SALE_COMPLETE", "VOID_ITEM", "UPDATE_FEATURE"
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  reasonCode: { type: String }, // Required for overrides
  previousValue: { type: mongoose.Schema.Types.Mixed },
  newValue: { type: mongoose.Schema.Types.Mixed },
  ip: { type: String }
}, { timestamps: true });

// Immutability logic via Mongoose hook
auditLogSchema.pre('updateOne', function() {
    throw new Error('Audit logs are immutable and append-only.');
});
auditLogSchema.pre('deleteOne', function() {
    throw new Error('Audit logs cannot be deleted.');
});

module.exports = mongoose.model('AuditLog', auditLogSchema);
