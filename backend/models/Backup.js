const mongoose = require('mongoose');

const backupSchema = new mongoose.Schema({
  collections: [{ type: String }],
  lsn: { type: String }, // Log Sequence Number
  type: { type: String, enum: ['hot', 'warm', 'cold'], required: true },
  location: { type: String, required: true }, // e.g. "NVMe-Node-01", "S3-Bucket"
  status: { type: String, enum: ['verified', 'encrypted', 'failed'], default: 'verified' }
}, { timestamps: true });

module.exports = mongoose.model('Backup', backupSchema);
