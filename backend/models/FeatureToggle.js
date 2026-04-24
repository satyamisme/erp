const mongoose = require('mongoose');

const featureToggleSchema = new mongoose.Schema({
  featureId: { type: Number, required: true, unique: true }, // 1..350
  name: { type: String, required: true },
  domain: { type: String, required: true },
  enabledRoles: [{ type: String, enum: ['SA', 'MGR', 'CSH', 'TECH', 'INV', 'AUD'] }],
  enabledGlobally: { type: Boolean, default: true },
  requiresApiKey: { type: Boolean, default: false },
  apiKeyName: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('FeatureToggle', featureToggleSchema);
