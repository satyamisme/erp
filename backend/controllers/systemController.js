exports.getGovernanceData = (req, res) => {
  res.json({
    featureMatrix: [
      { id: '#181', name: 'X-Region Proxy Handler', state: 'Enabled', sa: true, mgr: false, csh: true },
      { id: '#182', name: 'Quantum Encrypt Node', state: 'Disabled', sa: true, mgr: true, csh: false },
      { id: '#183', name: 'Bilateral Ledger Sync', state: 'Enabled', sa: true, mgr: false, csh: true },
      { id: '#316', name: 'Neural Traffic Filter', state: 'Enabled', sa: true, mgr: true, csh: true },
      { id: '#317', name: 'Deep Packet Inspect v2', state: 'Enabled', sa: true, mgr: false, csh: false }
    ],
    auditLogs: [
      { time: '2023-10-24 14:22:01.004', actor: 'USR-842-AX', op: 'PATCH_CONFIG', target: 'Feature#183_LedgerSync', status: 'verified' },
      { time: '2023-10-24 14:21:58.892', actor: 'SYS-DAEMON-01', op: 'CIRCUIT_TRIP', target: 'API_GATEWAY_B', status: 'warning' },
      { time: '2023-10-24 14:21:55.421', actor: 'USR-102-BQ', op: 'AUTH_LOGIN', target: 'Terminal_GUI_v4', status: 'verified' }
    ]
  });
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
