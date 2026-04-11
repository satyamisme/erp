const mongoose = require('mongoose');

const FeatureSchema = new mongoose.Schema({
  featureId: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String },
  domain: { type: String },
  status: { type: String, default: 'Optimal' }, // e.g. 'Optimal', 'Warning', 'Disabled'
  enabled: { type: Boolean, default: true },
  roles: {
    SA: { type: Boolean, default: true },
    MGR: { type: Boolean, default: false },
    CSH: { type: Boolean, default: false },
    TECH: { type: Boolean, default: false },
    INV: { type: Boolean, default: false },
    AUD: { type: Boolean, default: false }
  },
  requiresApiKey: { type: Boolean, default: false },
  apiKeyName: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Feature', FeatureSchema);
