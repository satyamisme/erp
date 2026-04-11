exports.getRepairTickets = (req, res) => {
  res.json({
    activeItems: 42,
    checklistValid: 14,
    intakeMapper: {
      device: 'iPhone 15 Pro Max',
      symptom: 'Cracked OLED / Touch Failure',
      assignedTo: 'Tech. Miller',
      id: '61-802'
    },
    benchQueue: [
      { bench: 'Bench 01', model: 'MacBook M3 Logic', time: 'Time: 02:14:00', status: 'On Track' },
      { bench: 'Bench 02', model: 'iPad Pro Battery', time: 'Part Pending', status: 'Delayed' },
      { bench: 'Bench 03', model: 'PS5 HDMI Port', time: 'Time: 00:45:12', status: 'On Track' },
      { bench: 'Bench 04', model: 'Fold 5 Hinge', time: 'Time: 01:10:45', status: 'On Track' }
    ],
    partLog: [
      { part: 'LCD Assembly (Genuine)', sn: 'GX-294-82', detail: 'Paired to Logic Board ID 8274' },
      { part: 'Battery Pack 4500mAh', sn: 'BT-992-01', detail: 'Cycles: 0 (New Original)' }
    ],
    inventory: [
      { id: 'REP-061', model: 'Surface Laptop Studio 2', tech: 'A. Miller', status: 'Bench_Active', sla: '01:42:00' },
      { id: 'REP-075', model: 'ROG Ally X', tech: 'S. Khan', status: 'Part_Hold', sla: 'Delayed' },
      { id: 'REP-092', model: 'Galaxy S24 Ultra', tech: 'J. Rivers', status: 'QC_Check', sla: '00:12:45' },
      { id: 'REP-120', model: 'Meta Quest 3', tech: 'B. Lee', status: 'Optimal', sla: '04:22:10' }
    ]
  });
};

exports.getCustomerProfile = (req, res) => {
  res.json({
    name: 'Elena Vance',
    tier: 'VIP GOLD TIER',
    score: '98/100',
    ltv: '$14,842.00',
    points: '8,250',
    repairs: 14,
    family: [
      { name: 'Eli Vance', role: 'Child Account (Restricted)' },
      { name: 'Isaac Kleiner', role: 'Spouse (Authorized Buyer)' }
    ],
    activeRepairs: [
      { model: 'MacBook Pro 16" - Logic Board Repair', status: 'AWAITING PARTS', progress: '65%', pickup: 'OCT 24' },
      { model: 'iPhone 14 Pro - Screen Swap', status: 'READY', progress: '100%', pickup: 'TODAY' }
    ],
    transactions: [
      { date: '12 Sep 2023', invoice: 'INV-88219', item: 'Apple Watch Ultra 2', amount: '$846.94' },
      { date: '04 Aug 2023', invoice: 'INV-87102', item: 'Standard Support Care', amount: '$199.00' },
      { date: '22 Jun 2023', invoice: 'INV-86544', item: 'iPhone 14 Pro Max Case', amount: '$59.00' }
    ]
  });
};
