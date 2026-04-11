exports.getExecutiveSummary = (req, res) => {
  res.json({
    systemHealth: 'OPTIMAL',
    activeNodes: 12,
    monthlyTarget: { current: 1.2, target: 1.4, percentage: 85.8 },
    revenueDistribution: {
      retail: { amount: '$428.5k', percentage: '65%' },
      repair: { amount: '$212.1k', percentage: '40%' },
      wholesale: { amount: '$582.4k', percentage: '82%' }
    },
    inventoryMatrix: [
      { model: 'LX-9000 Terminal', type: 'Hardware / POS', status: 'Optimal', total: '1,420' },
      { model: 'RTX-3080 Core', type: 'Processing / Module', status: 'Critical', total: '14' },
      { model: 'Bio-Scanner v2', type: 'Security / Peripheral', status: 'Low Stock', total: '182' },
      { model: 'Thermal Tape (Bulk)', type: 'Supply / Consumable', status: 'Optimal', total: '12,400' }
    ],
    slaAlerts: [
      { id: 'REP-902', type: 'CRITICAL BREACH', title: 'Mainframe Cooling Unit Repair', time: 'OVERDUE BY 4H 12M' },
      { id: 'REP-110', type: 'IMMINENT RISK', title: 'Branch 04 POS Diagnostic', time: 'ENDS IN 18M' }
    ],
    securityAlerts: [
      { type: 'Unauthorized Drawer Access', terminal: 'Terminal 092', time: '2m ago' },
      { type: 'Unusual Volume Spikes', terminal: 'Branch 14', time: '15m ago' },
      { type: 'New Admin Credentials', terminal: 'Tech_Lead_North', time: '1h ago' }
    ]
  });
};

exports.getInventoryMatrix = (req, res) => {
  res.json({
    transitAssets: '$42,840.00',
    reorderTriggers: 8,
    optimizationScore: '84.2%',
    items: [
      { sku: 'LT-8821-XP', name: 'Tactical Grade Fiber', total: '1,240', ny: '1,100', sf: '140', status: 'Low Stock Trigger', fill: '15%' },
      { sku: 'MK-4490-QU', name: 'Core Logic Processors', total: '4,812', ny: '2,400', sf: '2,412', status: 'Optimal Balance', fill: '88%' },
      { sku: 'ZN-9001-AS', name: 'Asymmetric Cooling Kits', total: '920', ny: '800', sf: '120', status: 'Awaiting Transit', fill: '45%' },
      { sku: 'RX-7720-DL', name: 'Modular Datalink Hubs', total: '350', ny: '12', sf: '338', status: 'Critical Shortage', fill: '5%' }
    ],
    reorderIntel: [
      { sku: 'LT-8821-XP', issue: 'Projected stock-out: 72 hours' },
      { sku: 'RX-7720-DL', issue: 'Vendor delay anticipated (SF Port)' }
    ]
  });
};

exports.getBatchJobs = (req, res) => {
  res.json({
    throughput: '1,240',
    errorRate: '0.04',
    latency: '14',
    status: 'STABLE',
    activeJobs: [
      { title: 'Bulk IMEI Import', desc: 'Importing 50k serials to Warehouse-B', progress: '74%', text: '37,000 / 50,000' },
      { title: 'ZPL Label Spooler', desc: 'Thermal dispatch queue: Shipping-East', progress: '42%', text: '420 / 1,000' },
      { title: 'Monthly Financial Export', desc: 'Generating reconciliation XLSX for Q3', progress: '15%', text: '2 / 12 Months' }
    ],
    history: [
      { id: '#JOB-8821', type: 'Inventory Sync (Full)', status: 'SUCCESS', operator: 'Admin_K_Chen', time: '14:02:11', duration: '12.4s' },
      { id: '#JOB-8820', type: 'External API Polling', status: 'RUNNING', operator: 'System_Auto', time: '14:05:00', duration: '--' },
      { id: '#JOB-8819', type: 'Invoice PDF Batch Gen', status: 'QUEUED', operator: 'Ops_B_Vance', time: '--', duration: '--' },
      { id: '#JOB-8818', type: 'PostgreSQL Vacuum', status: 'FAILED', operator: 'System_Auto', time: '13:50:00', duration: '0.4s' }
    ]
  });
};
