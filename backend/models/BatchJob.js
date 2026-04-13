const mongoose = require('mongoose');

const batchJobSchema = new mongoose.Schema({
  jobId: { type: String, required: true, unique: true },
  type: { type: String, enum: ['bulk_intake', 'export_invoices', 'print_labels', 'cash_sweep'], required: true },
  status: { type: String, enum: ['pending', 'processing', 'done', 'failed'], default: 'pending' },
  progress: { type: Number, default: 0, min: 0, max: 100 },
  resultUrl: { type: String }, // Link to download exported CSV, etc.
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  errorLogs: [{ type: String }]
}, { timestamps: true });

module.exports = mongoose.model('BatchJob', batchJobSchema);
