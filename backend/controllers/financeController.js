exports.getTransferStatus = (req, res) => {
  res.json({
    transferId: '#TX-99042-LAKKI',
    status: 'In-Transit',
    source: { terminal: 'Downtown Terminal - T01', address: '450 Commerce Way, District 4' },
    destination: { terminal: 'North Plaza Station - T09', address: '92 Skyline Drive, North Sector' },
    courier: { name: 'Marcus Thorne', id: 'Courier ID: #8829-X' },
    vehicle: 'EV-Van #44',
    eta: 'Today, 4:30 PM',
    manifest: [
      { sku: 'ELC-29938', name: 'Integrated Relay Hub V2', qty: '04', value: '$1,200.00', status: 'Verified' },
      { sku: 'SRV-00122', name: 'Optical Sensor Array', qty: '10', value: '$765.00', status: 'Verified' },
      { sku: 'CAB-LT-94', name: 'Fiber Link 100m Spool', qty: '02', value: '$45.00', status: 'Verified' },
      { sku: 'TR-CORE-V', name: 'Terminal Processor Unit', qty: '01', value: '$5,400.00', status: 'Damaged Check' }
    ],
    activityLog: [
      { event: 'Vehicle departed source gate T01', time: 'Oct 25, 02:40 PM • System Auto-Logged' },
      { event: 'Note added by Downtown Terminal (Sarah J.)', time: 'Oct 25, 01:15 PM' }
    ]
  });
};

exports.getZReport = (req, res) => {
  res.json({
    stationId: 'Station 042',
    revenueBreakdown: {
      cash: { amount: 'AED 12,110.50', percentage: '28%' },
      card: { amount: 'AED 28,450.00', percentage: '66%' },
      bank: { amount: 'AED 1,840.00', percentage: '12%' },
      credit: { amount: 'AED 2,341.00', percentage: '6%' }
    },
    transactionLog: [
      { date: '12 Sep 2023', invoice: 'INV-88219', item: 'Apple Watch Ultra 2', amount: '$846.94' },
      { date: '04 Aug 2023', invoice: 'INV-87102', item: 'Standard Support Care', amount: '$199.00' },
      { date: '22 Jun 2023', invoice: 'INV-86544', item: 'iPhone 14 Pro Max Case', amount: '$59.00' }
    ],
    financialSummary: {
      taxCollected: 'AED 2,145.08',
      discounts: 'AED 840.00',
      netLiquidable: 'AED 39,916.42'
    }
  });
};
