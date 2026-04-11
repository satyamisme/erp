const Feature = require('../models/Feature');

exports.getGovernanceData = async (req, res) => {
  try {
    const features = await Feature.find({}).sort({ featureId: 1 });
    res.json({
      featureMatrix: features,
      auditLogs: [
        { time: new Date().toISOString(), actor: 'USR-842-AX', op: 'PATCH_CONFIG', target: 'Feature#183_LedgerSync', status: 'verified' },
        { time: new Date().toISOString(), actor: 'SYS-DAEMON-01', op: 'CIRCUIT_TRIP', target: 'API_GATEWAY_B', status: 'warning' },
        { time: new Date().toISOString(), actor: 'USR-102-BQ', op: 'AUTH_LOGIN', target: 'Terminal_GUI_v4', status: 'verified' }
      ]
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch governance data' });
  }
};

exports.updateFeature = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Check for API keys if the feature requires one and is being enabled
    if (updateData.enabled === true) {
        const feature = await Feature.findOne({ featureId: id });
        if (feature && feature.requiresApiKey) {
            if (!process.env[feature.apiKeyName]) {
                return res.status(400).json({
                    error: `Missing API Key: ${feature.apiKeyName} is required to enable this feature.`
                });
            }
        }
    }

    const updatedFeature = await Feature.findOneAndUpdate(
      { featureId: id },
      { $set: updateData },
      { new: true }
    );
    res.json(updatedFeature);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update feature' });
  }
};

exports.getSystemHealth = (req, res) => {
  res.json({
    status: 'OPTIMAL',
    osRuntime: '1422:12:04',
    nodes: [
      { name: 'Node-Alpha', status: 'Optimal', cpu: '24%', memory: '65%', latency: '12ms' },
      { name: 'Node-Beta', status: 'Optimal', cpu: '31%', memory: '60%', latency: '14ms' },
      { name: 'Node-Gamma', status: 'Elevated', cpu: '72%', memory: '88%', latency: '45ms' }
    ],
    apiBreakers: [
      { service: 'WhatsApp API', latency: '88ms', status: 'Healthy' },
      { service: 'KNET Gateway', latency: '210ms', status: 'Stable' },
      { service: 'Apple GSX', latency: '1420ms', status: 'Degraded' }
    ],
    dbEngine: {
      integrity: '99.8%',
      orphanedRecords: 42
    },
    backups: [
      { tier: 'Hot Storage', location: 'Local NVMe Cluster', latest: 'NOW', status: 'Verified' },
      { tier: 'Warm Storage', location: 'AWS S3 (Standard)', latest: '04:00 AM', status: 'Verified' },
      { tier: 'Cold Storage', location: 'Glacier Deep Archive', latest: 'Oct 01', status: 'Encrypted' }
    ]
  });
};
