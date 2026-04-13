const mongoose = require('mongoose');
require('dotenv').config({ path: __dirname + '/.env' });
const Feature = require('./models/Feature');

// Raw text data provided in the prompt (partial list for seeding, the script will generate placeholders for remaining up to 367)
const rawData = [
  { id: 1, name: '4-column virtualised product grid', domain: 'POS & Unified Sales Terminal' },
  { id: 2, name: 'Barcode scanner integration', domain: 'POS & Unified Sales Terminal' },
  { id: 3, name: 'Elastic global search', domain: 'POS & Unified Sales Terminal' },
  { id: 4, name: 'Product quick view', domain: 'POS & Unified Sales Terminal' },
  { id: 5, name: 'IMEI validation (15-digit check)', domain: 'POS & Unified Sales Terminal' },
  { id: 6, name: 'IMEI duplicate check during sale', domain: 'POS & Unified Sales Terminal' },
  { id: 7, name: 'Product bundling', domain: 'POS & Unified Sales Terminal' },
  { id: 8, name: 'Serial number tracking (non-IMEI)', domain: 'POS & Unified Sales Terminal' },
  { id: 9, name: 'Cart editing (quantity, remove)', domain: 'POS & Unified Sales Terminal' },
  { id: 10, name: 'Customer lookup by phone', domain: 'POS & Unified Sales Terminal' },
  { id: 11, name: 'Tax calculation (VAT)', domain: 'POS & Unified Sales Terminal' },
  { id: 12, name: 'Split payments', domain: 'POS & Unified Sales Terminal' },
  { id: 13, name: 'Discount input', domain: 'POS & Unified Sales Terminal' },
  { id: 14, name: 'Loyalty points redemption', domain: 'POS & Unified Sales Terminal' },
  { id: 15, name: 'Receipt printing (thermal)', domain: 'POS & Unified Sales Terminal' },
  { id: 16, name: 'Email receipt', domain: 'POS & Unified Sales Terminal' },
  { id: 17, name: 'Hold cart', domain: 'POS & Unified Sales Terminal' },
  { id: 18, name: 'Retrieve held cart', domain: 'POS & Unified Sales Terminal' },
  { id: 19, name: 'Add note to sale', domain: 'POS & Unified Sales Terminal' },
  { id: 20, name: 'Salesperson assignment', domain: 'POS & Unified Sales Terminal' },
  { id: 21, name: 'Exchange item', domain: 'POS & Unified Sales Terminal' },
  { id: 22, name: 'Layaway / deposit plan', domain: 'POS & Unified Sales Terminal' },
  { id: 23, name: 'Gift card sale & redemption', domain: 'POS & Unified Sales Terminal' },
  { id: 24, name: 'Customer credit limit check', domain: 'POS & Unified Sales Terminal' },
  { id: 25, name: 'Multi-currency cash', domain: 'POS & Unified Sales Terminal' },
  { id: 26, name: 'Rounding adjustment', domain: 'POS & Unified Sales Terminal' },
  { id: 27, name: 'Price override', domain: 'POS & Unified Sales Terminal' },
  { id: 28, name: 'Cost price visibility', domain: 'POS & Unified Sales Terminal' },
  { id: 29, name: 'Margin indicator', domain: 'POS & Unified Sales Terminal' },
  { id: 30, name: 'Low stock warning on add', domain: 'POS & Unified Sales Terminal' },
  { id: 31, name: 'Offline-first mode', domain: 'POS & Unified Sales Terminal' },
  { id: 32, name: 'Auto-sync engine', domain: 'POS & Unified Sales Terminal' },
  { id: 33, name: 'Offline sale storage', domain: 'POS & Unified Sales Terminal' },
  { id: 34, name: 'Voucher / coupon validation', domain: 'POS & Unified Sales Terminal' },
  { id: 35, name: 'Buy One Get One (BOGO)', domain: 'POS & Unified Sales Terminal' },
  { id: 36, name: 'Time-based sale (happy hour)', domain: 'POS & Unified Sales Terminal' },
  { id: 37, name: 'Customer group discount', domain: 'POS & Unified Sales Terminal' },
  { id: 38, name: 'Minimum cart value for discount', domain: 'POS & Unified Sales Terminal' },
  { id: 39, name: 'Free shipping threshold', domain: 'POS & Unified Sales Terminal' },
  { id: 40, name: 'Refund / return', domain: 'POS & Unified Sales Terminal' },
  { id: 41, name: 'Return to original payment', domain: 'POS & Unified Sales Terminal' },
  { id: 42, name: 'Store credit refund', domain: 'POS & Unified Sales Terminal' },
  { id: 43, name: 'No-receipt return', domain: 'POS & Unified Sales Terminal' },
  { id: 44, name: 'Return with original receipt', domain: 'POS & Unified Sales Terminal' },
  { id: 45, name: 'Exchange price difference', domain: 'POS & Unified Sales Terminal' },
  { id: 46, name: 'Void transaction (full)', domain: 'POS & Unified Sales Terminal' },
  { id: 47, name: 'Void line item', domain: 'POS & Unified Sales Terminal' },
  { id: 48, name: 'Re-print last receipt', domain: 'POS & Unified Sales Terminal' },
  { id: 49, name: 'Open cash drawer (no sale)', domain: 'POS & Unified Sales Terminal' },
  { id: 50, name: 'Cash drawer count', domain: 'POS & Unified Sales Terminal' },
  { id: 51, name: 'Sales history per customer', domain: 'POS & Unified Sales Terminal' },
  { id: 52, name: 'Recent customers list', domain: 'POS & Unified Sales Terminal' },
  { id: 53, name: 'Quick customer creation', domain: 'POS & Unified Sales Terminal' },
  { id: 54, name: 'Customer edit', domain: 'POS & Unified Sales Terminal' },
  { id: 55, name: 'Merge duplicate customers', domain: 'POS & Unified Sales Terminal' },
  { id: 56, name: 'Customer blacklist flag', domain: 'POS & Unified Sales Terminal' },
  { id: 57, name: 'Required customer for repair', domain: 'POS & Unified Sales Terminal' },
  { id: 58, name: 'Optional customer for sale', domain: 'POS & Unified Sales Terminal' },
  { id: 59, name: 'Customer birthday reminder', domain: 'POS & Unified Sales Terminal' },
  { id: 60, name: 'Customer spend summary', domain: 'POS & Unified Sales Terminal' },

  { id: 61, name: 'Repair intake form', domain: 'Deep-Tech Repair Hub' },
  { id: 62, name: 'Device catalog', domain: 'Deep-Tech Repair Hub' },
  { id: 63, name: 'Visual damage mapper', domain: 'Deep-Tech Repair Hub' },
  { id: 64, name: 'Symptom checklist', domain: 'Deep-Tech Repair Hub' },
  { id: 65, name: 'Repair priority (normal/urgent/VIP)', domain: 'Deep-Tech Repair Hub' },
  { id: 66, name: 'Estimated completion time', domain: 'Deep-Tech Repair Hub' },
  { id: 67, name: 'Repair quote generation', domain: 'Deep-Tech Repair Hub' },
  { id: 68, name: 'Quote approval (customer)', domain: 'Deep-Tech Repair Hub' },
  { id: 69, name: 'Repair status tracking', domain: 'Deep-Tech Repair Hub' },
  { id: 70, name: 'Status update notifications', domain: 'Deep-Tech Repair Hub' },
  { id: 71, name: '20-point QC gate', domain: 'Deep-Tech Repair Hub' },
  { id: 72, name: 'QC failure reason', domain: 'Deep-Tech Repair Hub' },
  { id: 73, name: 'Rework workflow', domain: 'Deep-Tech Repair Hub' },
  { id: 74, name: 'WhatsApp status bot', domain: 'Deep-Tech Repair Hub', requiresApiKey: true, apiKeyName: 'WHATSAPP_API_KEY' },
  { id: 75, name: 'SMS fallback for notifications', domain: 'Deep-Tech Repair Hub', requiresApiKey: true, apiKeyName: 'TWILIO_API_KEY' },
  { id: 76, name: 'Repair history per device (IMEI)', domain: 'Deep-Tech Repair Hub' },
  { id: 77, name: 'Warranty tracking', domain: 'Deep-Tech Repair Hub' },
  { id: 78, name: 'Warranty claim', domain: 'Deep-Tech Repair Hub' },
  { id: 79, name: 'Part replacement log', domain: 'Deep-Tech Repair Hub' },
  { id: 80, name: 'Part deduction from inventory', domain: 'Deep-Tech Repair Hub' },
  { id: 81, name: 'Part restocking (cancelled repair)', domain: 'Deep-Tech Repair Hub' },
  { id: 82, name: 'Technician assignment', domain: 'Deep-Tech Repair Hub' },
  { id: 83, name: 'Technician queue view', domain: 'Deep-Tech Repair Hub' },
  { id: 84, name: 'Technician performance metrics', domain: 'Deep-Tech Repair Hub' },
  { id: 85, name: 'Labour commission calculation', domain: 'Deep-Tech Repair Hub' },
  { id: 86, name: 'Repair note (internal)', domain: 'Deep-Tech Repair Hub' },
  { id: 87, name: 'Repair note (customer visible)', domain: 'Deep-Tech Repair Hub' },
  { id: 88, name: 'Photo upload (before/after)', domain: 'Deep-Tech Repair Hub' },
  { id: 89, name: 'Customer device gallery', domain: 'Deep-Tech Repair Hub' },
  { id: 90, name: 'Repair deposit collection', domain: 'Deep-Tech Repair Hub' },
  { id: 91, name: 'Balance due on collection', domain: 'Deep-Tech Repair Hub' },
  { id: 92, name: 'Repair invoice', domain: 'Deep-Tech Repair Hub' },
  { id: 93, name: 'Repair payment split', domain: 'Deep-Tech Repair Hub' },
  { id: 94, name: 'Repair cancellation flow', domain: 'Deep-Tech Repair Hub' },
  { id: 95, name: 'No-show follow-up', domain: 'Deep-Tech Repair Hub' },
  { id: 96, name: 'Job expiry alert', domain: 'Deep-Tech Repair Hub' },
  { id: 97, name: 'Device archive (cold storage)', domain: 'Deep-Tech Repair Hub' },
  { id: 98, name: 'Repair category manager', domain: 'Deep-Tech Repair Hub' },
  { id: 99, name: 'Status colour mapping', domain: 'Deep-Tech Repair Hub' },
  { id: 100, name: 'Repair cost estimator (quick quote)', domain: 'Deep-Tech Repair Hub' },
  { id: 101, name: 'Technician login via NFC', domain: 'Deep-Tech Repair Hub' },
  { id: 102, name: 'Parts backorder list', domain: 'Deep-Tech Repair Hub' },
  { id: 103, name: 'IMEI blacklist check (GSMA)', domain: 'Deep-Tech Repair Hub', requiresApiKey: true, apiKeyName: 'GSMA_API_KEY' },
  { id: 104, name: 'Internal spare parts request', domain: 'Deep-Tech Repair Hub' },
  { id: 105, name: 'Labour commission engine', domain: 'Deep-Tech Repair Hub' },
  { id: 106, name: 'Service area manager', domain: 'Deep-Tech Repair Hub' },
  { id: 107, name: 'Job priority toggle', domain: 'Deep-Tech Repair Hub' },
  { id: 108, name: 'Post-repair survey', domain: 'Deep-Tech Repair Hub' },
  { id: 109, name: 'Digital repair agreement', domain: 'Deep-Tech Repair Hub' },
  { id: 110, name: 'Device archive', domain: 'Deep-Tech Repair Hub' },
  { id: 111, name: 'Repair category manager', domain: 'Deep-Tech Repair Hub' },
  { id: 112, name: 'Status colour mapping', domain: 'Deep-Tech Repair Hub' },
  { id: 113, name: 'Auto-assign rules', domain: 'Deep-Tech Repair Hub' },
  { id: 114, name: 'Customer device gallery', domain: 'Deep-Tech Repair Hub' },
  { id: 115, name: 'Repair cost estimator', domain: 'Deep-Tech Repair Hub' },
  { id: 116, name: 'Job expiry alert', domain: 'Deep-Tech Repair Hub' },
  { id: 117, name: 'Bench queue TV', domain: 'Deep-Tech Repair Hub' },
  { id: 118, name: 'Component serial tracking', domain: 'Deep-Tech Repair Hub' },
  { id: 119, name: 'Repair cancellation flow', domain: 'Deep-Tech Repair Hub' },
  { id: 120, name: 'Job card barcode', domain: 'Deep-Tech Repair Hub' },

  { id: 121, name: 'Multi-store matrix view', domain: 'Inventory & Supply Chain' },
  { id: 122, name: 'Inter-store transfer request', domain: 'Inventory & Supply Chain' },
  { id: 123, name: 'Transfer approval', domain: 'Inventory & Supply Chain' },
  { id: 124, name: 'Transfer receive', domain: 'Inventory & Supply Chain' },
  { id: 125, name: 'Low stock dashboard', domain: 'Inventory & Supply Chain' },
  { id: 126, name: 'Purchase order (PO) creation', domain: 'Inventory & Supply Chain' },
  { id: 127, name: 'PO approval workflow', domain: 'Inventory & Supply Chain' },
  { id: 128, name: 'Landed cost engine', domain: 'Inventory & Supply Chain' },
  { id: 129, name: 'PO receipt', domain: 'Inventory & Supply Chain' },
  { id: 130, name: 'Partial PO receipt', domain: 'Inventory & Supply Chain' },
  { id: 131, name: 'Supplier management', domain: 'Inventory & Supply Chain' },
  { id: 132, name: 'Supplier credit tracking', domain: 'Inventory & Supply Chain' },
  { id: 133, name: 'Supplier return (RMA to vendor)', domain: 'Inventory & Supply Chain' },
  { id: 134, name: 'Stock adjustment (manual)', domain: 'Inventory & Supply Chain' },
  { id: 135, name: 'Stock take (cycle count)', domain: 'Inventory & Supply Chain' },
  { id: 136, name: 'Stock adjustment approval', domain: 'Inventory & Supply Chain' },
  { id: 137, name: 'Stock transfer (bulk)', domain: 'Inventory & Supply Chain' },
  { id: 138, name: 'Stock valuation (FIFO)', domain: 'Inventory & Supply Chain' },
  { id: 139, name: 'Stock valuation (average cost)', domain: 'Inventory & Supply Chain' },
  { id: 140, name: 'Stock valuation by store', domain: 'Inventory & Supply Chain' },
  { id: 141, name: 'FIFO reporting', domain: 'Inventory & Supply Chain' },
  { id: 142, name: 'Reorder point alert', domain: 'Inventory & Supply Chain' },
  { id: 143, name: 'Auto-replenish (auto-PO)', domain: 'Inventory & Supply Chain' },
  { id: 144, name: 'Supplier lead time tracking', domain: 'Inventory & Supply Chain' },
  { id: 145, name: 'Batch expiry tracking', domain: 'Inventory & Supply Chain' },
  { id: 146, name: 'Serial number / IMEI tracking', domain: 'Inventory & Supply Chain' },
  { id: 147, name: 'Bulk IMEI registration (CSV)', domain: 'Inventory & Supply Chain' },
  { id: 148, name: 'IMEI range auto-generation', domain: 'Inventory & Supply Chain' },
  { id: 149, name: 'Component serial tracking in repair', domain: 'Inventory & Supply Chain' },
  { id: 150, name: 'Defective return pool', domain: 'Inventory & Supply Chain' },
  { id: 151, name: 'Supplier bank details', domain: 'Inventory & Supply Chain' },
  { id: 152, name: 'In-transit insurance tag', domain: 'Inventory & Supply Chain' },
  { id: 153, name: 'Transfer manifest QR', domain: 'Inventory & Supply Chain' },
  { id: 154, name: 'Inventory snapshot (export)', domain: 'Inventory & Supply Chain' },
  { id: 155, name: 'Unit of measure (UOM)', domain: 'Inventory & Supply Chain' },
  { id: 156, name: 'Warehouse bin location', domain: 'Inventory & Supply Chain' },
  { id: 157, name: 'Inventory pick list', domain: 'Inventory & Supply Chain' },
  { id: 158, name: 'Inventory cycle count schedule', domain: 'Inventory & Supply Chain' },
  { id: 159, name: 'Blind cycle count (zero visibility)', domain: 'Inventory & Supply Chain' },
  { id: 160, name: 'Double-blind count (two staff)', domain: 'Inventory & Supply Chain' },
  { id: 161, name: 'Post-scan reconciliation', domain: 'Inventory & Supply Chain' },
  { id: 162, name: 'Batch intake buffer (scan-to-bucket)', domain: 'Inventory & Supply Chain' },
  { id: 163, name: 'Exceptions tab for unrecognised barcodes', domain: 'Inventory & Supply Chain' },
  { id: 164, name: 'Batch label printing (ZPL)', domain: 'Inventory & Supply Chain' },
  { id: 165, name: 'Supplier MOQ alert', domain: 'Inventory & Supply Chain' },
  { id: 166, name: 'Inter-store loan (temporary)', domain: 'Inventory & Supply Chain' },
  { id: 167, name: 'Supplier order reminder (late PO)', domain: 'Inventory & Supply Chain' },
  { id: 168, name: 'Automatic stock reconciliation', domain: 'Inventory & Supply Chain' },
  { id: 169, name: 'Stock valuation by warehouse', domain: 'Inventory & Supply Chain' },
  { id: 170, name: 'Bulk transfer approval (one-click)', domain: 'Inventory & Supply Chain' },
  { id: 171, name: 'Bulk transfer approval', domain: 'Inventory & Supply Chain' },
  { id: 172, name: 'Stock valuation by store', domain: 'Inventory & Supply Chain' },
  { id: 173, name: 'Unit of measure (UOM)', domain: 'Inventory & Supply Chain' },
  { id: 174, name: 'Supplier bank details', domain: 'Inventory & Supply Chain' },
  { id: 175, name: 'Defective return pool', domain: 'Inventory & Supply Chain' },
  { id: 176, name: 'In-transit insurance tag', domain: 'Inventory & Supply Chain' },
  { id: 177, name: 'Shelf life tracker', domain: 'Inventory & Supply Chain' },
  { id: 178, name: 'Auto-replenish', domain: 'Inventory & Supply Chain' },
  { id: 179, name: 'Transfer manifest QR', domain: 'Inventory & Supply Chain' },
  { id: 180, name: 'Inventory snapshot', domain: 'Inventory & Supply Chain' },

  { id: 181, name: 'Master audit trail', domain: 'Governance, Security & HR' },
  { id: 182, name: 'Audit log viewer', domain: 'Governance, Security & HR' },
  { id: 183, name: 'Audit log export (CSV)', domain: 'Governance, Security & HR' },
  { id: 184, name: 'Anomaly detection rules', domain: 'Governance, Security & HR' },
  { id: 185, name: 'Feature toggle board', domain: 'Governance, Security & HR' },
  { id: 186, name: 'IP whitelisting', domain: 'Governance, Security & HR' },
  { id: 187, name: 'Geofence login', domain: 'Governance, Security & HR' },
  { id: 188, name: 'Login attempt lockout', domain: 'Governance, Security & HR' },
  { id: 189, name: 'Password expiry policy', domain: 'Governance, Security & HR' },
  { id: 190, name: 'Z-report PDF', domain: 'Governance, Security & HR' },
  { id: 191, name: 'Mid-shift X-report', domain: 'Governance, Security & HR' },
  { id: 192, name: 'Profit & loss dashboard', domain: 'Governance, Security & HR' },
  { id: 193, name: 'Expense tracker', domain: 'Governance, Security & HR' },
  { id: 194, name: 'VAT/tax export', domain: 'Governance, Security & HR' },
  { id: 195, name: 'Role template creator', domain: 'Governance, Security & HR' },
  { id: 196, name: 'Staff permission override', domain: 'Governance, Security & HR' },
  { id: 197, name: 'Payroll engine', domain: 'Governance, Security & HR' },
  { id: 198, name: 'Employee performance score', domain: 'Governance, Security & HR' },
  { id: 199, name: 'Store profile manager', domain: 'Governance, Security & HR' },
  { id: 200, name: 'Database health monitor', domain: 'Governance, Security & HR' },
  { id: 201, name: 'Auto-backups (daily cloud snapshots)', domain: 'Governance, Security & HR' },
  { id: 202, name: 'Remote session logout', domain: 'Governance, Security & HR' },
  { id: 203, name: 'Multi-store comparison', domain: 'Governance, Security & HR' },
  { id: 204, name: 'Aged debt report', domain: 'Governance, Security & HR' },
  { id: 205, name: 'Fraud detection logic', domain: 'Governance, Security & HR' },
  { id: 206, name: 'Discount capping', domain: 'Governance, Security & HR' },
  { id: 207, name: 'Expense receipt upload', domain: 'Governance, Security & HR' },
  { id: 208, name: 'User activity timeline', domain: 'Governance, Security & HR' },
  { id: 209, name: 'Security policy enforcer', domain: 'Governance, Security & HR' },
  { id: 210, name: 'Custom field builder', domain: 'Governance, Security & HR' },
  { id: 211, name: 'System event notifications', domain: 'Governance, Security & HR' },
  { id: 212, name: 'Multi-user concurrency', domain: 'Governance, Security & HR' },
  { id: 213, name: 'God-mode parity', domain: 'Governance, Security & HR' },
  { id: 214, name: 'Regional scoping', domain: 'Governance, Security & HR' },
  { id: 215, name: 'Audit log encryption', domain: 'Governance, Security & HR' },
  { id: 216, name: 'Staff feedback loop', domain: 'Governance, Security & HR' },
  { id: 217, name: 'Access logs', domain: 'Governance, Security & HR' },
  { id: 218, name: 'Global search palette (Ctrl+K)', domain: 'Governance, Security & HR' },
  { id: 219, name: 'Dark/light mode theme', domain: 'Governance, Security & HR' },
  { id: 220, name: 'Print layout builder', domain: 'Governance, Security & HR' },
  { id: 221, name: 'Voucher validation', domain: 'Governance, Security & HR' },
  { id: 222, name: 'Customer merging', domain: 'Governance, Security & HR' },
  { id: 223, name: 'Global heatmap', domain: 'Governance, Security & HR' },
  { id: 224, name: 'Tax compliance check', domain: 'Governance, Security & HR' },
  { id: 225, name: 'User profile image', domain: 'Governance, Security & HR' },
  { id: 226, name: 'Shift handover note', domain: 'Governance, Security & HR' },
  { id: 227, name: 'Training mode (sandbox)', domain: 'Governance, Security & HR' },
  { id: 228, name: 'Feature adoption score', domain: 'Governance, Security & HR' },
  { id: 229, name: 'Legal agreement manager', domain: 'Governance, Security & HR' },
  { id: 230, name: 'Currency exchange rate', domain: 'Governance, Security & HR' },
  { id: 231, name: 'GDPR/privacy tools', domain: 'Governance, Security & HR' },
  { id: 232, name: 'System health check', domain: 'Governance, Security & HR' },
  { id: 233, name: 'Bulk user invite (CSV)', domain: 'Governance, Security & HR' },
  { id: 234, name: 'Department hierarchy', domain: 'Governance, Security & HR' },
  { id: 235, name: 'Maintenance mode toggle', domain: 'Governance, Security & HR' },
  { id: 236, name: 'API key management', domain: 'Governance, Security & HR' },
  { id: 237, name: 'Payment terminal setup', domain: 'Governance, Security & HR' },
  { id: 238, name: 'Webhook manager', domain: 'Governance, Security & HR' },
  { id: 239, name: 'Report scheduler', domain: 'Governance, Security & HR' },
  { id: 240, name: 'Dashboard widget customizer', domain: 'Governance, Security & HR' },

  { id: 241, name: 'BOPIS (Buy Online, Pickup In Store)', domain: 'Omnichannel & CRM' },
  { id: 242, name: 'Stock sync with e-commerce', domain: 'Omnichannel & CRM' },
  { id: 243, name: 'Webhook listeners (Shopify/Woo)', domain: 'Omnichannel & CRM' },
  { id: 244, name: 'Anomaly detection (sales)', domain: 'Omnichannel & CRM' },
  { id: 245, name: 'Customer queue display (TV)', domain: 'Omnichannel & CRM' },
  { id: 246, name: 'Biometric login (fingerprint)', domain: 'Omnichannel & CRM' },
  { id: 247, name: 'Customer queue display (self-service)', domain: 'Omnichannel & CRM' },
  { id: 248, name: 'SMS notifications', domain: 'Omnichannel & CRM', requiresApiKey: true, apiKeyName: 'TWILIO_API_KEY' },
  { id: 249, name: 'Email marketing integration', domain: 'Omnichannel & CRM', requiresApiKey: true, apiKeyName: 'MAILCHIMP_API_KEY' },
  { id: 250, name: 'Social media linkage', domain: 'Omnichannel & CRM' },
  { id: 251, name: 'WhatsApp API config', domain: 'Omnichannel & CRM', requiresApiKey: true, apiKeyName: 'WHATSAPP_API_KEY' },
  { id: 252, name: 'Customer tiering', domain: 'Omnichannel & CRM' },
  { id: 253, name: 'Birthday coupon bot', domain: 'Omnichannel & CRM' },
  { id: 254, name: 'Review solicitor', domain: 'Omnichannel & CRM' },
  { id: 255, name: 'Mandoob tracker', domain: 'Omnichannel & CRM' },
  { id: 256, name: 'Customer 360 profile', domain: 'Omnichannel & CRM' },
  { id: 257, name: 'Blacklist manager', domain: 'Omnichannel & CRM' },
  { id: 258, name: 'Self-service portal', domain: 'Omnichannel & CRM' },
  { id: 259, name: 'Omnichannel search', domain: 'Omnichannel & CRM' },
  { id: 260, name: 'Click-to-call', domain: 'Omnichannel & CRM' },
  { id: 261, name: 'Social media linkage', domain: 'Omnichannel & CRM' },
  { id: 262, name: 'Waitlist logic', domain: 'Omnichannel & CRM' },
  { id: 263, name: 'Pre-order management', domain: 'Omnichannel & CRM' },
  { id: 264, name: 'Family account linking', domain: 'Omnichannel & CRM' },
  { id: 265, name: 'Geo-fencing alerts', domain: 'Omnichannel & CRM' },
  { id: 266, name: 'Integrated map', domain: 'Omnichannel & CRM' },
  { id: 267, name: 'Customer CLV', domain: 'Omnichannel & CRM' },
  { id: 268, name: 'Chat history archive', domain: 'Omnichannel & CRM' },
  { id: 269, name: 'Store feedback screen', domain: 'Omnichannel & CRM' },
  { id: 270, name: 'Incident log', domain: 'Omnichannel & CRM' },
  { id: 271, name: 'Voucher validation', domain: 'Omnichannel & CRM' },
  { id: 272, name: 'Excel/CSV export', domain: 'Omnichannel & CRM' },
  { id: 273, name: 'Security policy', domain: 'Omnichannel & CRM' },
  { id: 274, name: 'Staff messenger', domain: 'Omnichannel & CRM' },
  { id: 275, name: 'IoT scale sync', domain: 'Omnichannel & CRM' },
  { id: 276, name: 'Smart display screen', domain: 'Omnichannel & CRM' },
  { id: 277, name: 'RFID tag reader', domain: 'Omnichannel & CRM' },
  { id: 278, name: 'IoT printer status', domain: 'Omnichannel & CRM' },
  { id: 279, name: 'Cash drawer log', domain: 'Omnichannel & CRM' },
  { id: 280, name: 'Kiosk mode', domain: 'Omnichannel & CRM' },
  { id: 281, name: 'Audio announcements', domain: 'Omnichannel & CRM' },
  { id: 282, name: 'Digital signage sync', domain: 'Omnichannel & CRM' },
  { id: 283, name: 'Payment terminal handshake', domain: 'Omnichannel & CRM' },
  { id: 284, name: 'Door sensor log', domain: 'Omnichannel & CRM' },
  { id: 285, name: 'Inventory pick-list QR', domain: 'Omnichannel & CRM' },
  { id: 286, name: 'Batch IMEI registration', domain: 'Omnichannel & CRM' },
  { id: 287, name: 'Web-to-store fulfill', domain: 'Omnichannel & CRM' },
  { id: 288, name: 'Automatic stock reconciliation', domain: 'Omnichannel & CRM' },
  { id: 289, name: 'Supplier order reminder', domain: 'Omnichannel & CRM' },
  { id: 290, name: 'Duplicate customer merge', domain: 'Omnichannel & CRM' },
  { id: 291, name: 'Failed payment retry', domain: 'Omnichannel & CRM' },
  { id: 292, name: 'Auto-assign tech', domain: 'Omnichannel & CRM' },
  { id: 293, name: 'Executive summary email', domain: 'Omnichannel & CRM' },
  { id: 294, name: 'Product affinity analysis', domain: 'Omnichannel & CRM' },
  { id: 295, name: 'Return rate by SKU', domain: 'Omnichannel & CRM' },
  { id: 296, name: 'Sales funnel analytics', domain: 'Omnichannel & CRM' },
  { id: 297, name: 'Zero-stock impact', domain: 'Omnichannel & CRM' },
  { id: 298, name: 'Privacy anonymization', domain: 'Omnichannel & CRM' },
  { id: 299, name: 'Tamper-proof audit', domain: 'Omnichannel & CRM' },
  { id: 300, name: 'Global search palette', domain: 'Omnichannel & CRM' },

  { id: 301, name: 'Phone trade-in / exchange flow', domain: 'Extended Features' },
  { id: 302, name: 'BNPL / instalment payment method', domain: 'Extended Features' },
  { id: 303, name: 'Two-factor authentication (2FA)', domain: 'Extended Features' },
  { id: 304, name: 'Apple GSX / authorised repair integration', domain: 'Extended Features', requiresApiKey: true, apiKeyName: 'APPLE_GSX_API_KEY' },
  { id: 305, name: 'Blacklisted / stolen device check (incoming)', domain: 'Extended Features', requiresApiKey: true, apiKeyName: 'GSMA_API_KEY' },
  { id: 306, name: 'ESD safety workspace checklist', domain: 'Extended Features' },
  { id: 307, name: 'Email marketing integration', domain: 'Extended Features' },
  { id: 308, name: 'Customs duty / HS tariff code on PO', domain: 'Extended Features' },
  { id: 309, name: 'Customer consent & marketing opt-in log', domain: 'Extended Features' },
  { id: 310, name: 'Repair deposit / partial payment intake', domain: 'Extended Features' },
  { id: 311, name: 'Multi-language UI (Arabic RTL)', domain: 'Extended Features' },
  { id: 312, name: 'Supplier WhatsApp / Telegram quick order', domain: 'Extended Features' },
  { id: 313, name: 'CCTV / camera integration hook', domain: 'Extended Features' },
  { id: 314, name: 'Apple Business Chat / Google Business Messages', domain: 'Extended Features' },
  { id: 315, name: 'Exchange rate auto-updater', domain: 'Extended Features' },

  { id: 316, name: 'Batch intake buffer', domain: 'New Enterprise Features' },
  { id: 317, name: 'PITR restore slider', domain: 'New Enterprise Features' },
  { id: 318, name: 'Blind cycle count toggle', domain: 'New Enterprise Features' },
  { id: 319, name: 'API circuit breaker panel', domain: 'New Enterprise Features' },
  { id: 320, name: 'Pro-forma quote mode', domain: 'New Enterprise Features' },
  { id: 321, name: 'Store opening checklist', domain: 'New Enterprise Features' },
  { id: 322, name: 'Customer wishlist / back in stock alert', domain: 'New Enterprise Features' },
  { id: 323, name: 'Technician certification expiry tracker', domain: 'New Enterprise Features' },
  { id: 324, name: 'Inter-store loan (temporary)', domain: 'New Enterprise Features' },
  { id: 325, name: 'POS screen auto-lock after inactivity', domain: 'New Enterprise Features' },
  { id: 326, name: 'Batch job manager UI', domain: 'New Enterprise Features' },
  { id: 327, name: 'ZPL print engine (raw pass-through)', domain: 'New Enterprise Features' },
  { id: 328, name: 'Virtual scrolling for all large tables', domain: 'New Enterprise Features' },
  { id: 329, name: 'Conflict resolution UI (offline sync)', domain: 'New Enterprise Features' },
  { id: 330, name: 'Manager PIN override', domain: 'New Enterprise Features' },
  { id: 331, name: 'Fast-switch user PIN overlay', domain: 'New Enterprise Features' },
  { id: 332, name: 'Carrier commission clawback ledger', domain: 'New Enterprise Features' },
  { id: 333, name: 'RMA to vendor flow (supplier return)', domain: 'New Enterprise Features' },
  { id: 334, name: 'API kill switch (global)', domain: 'New Enterprise Features' },
  { id: 335, name: 'Session invalidation by branch', domain: 'New Enterprise Features' },
  { id: 336, name: 'Post-scan reconciliation UI', domain: 'New Enterprise Features' },
  { id: 337, name: 'IMEI range auto-generation', domain: 'New Enterprise Features' },
  { id: 338, name: 'Batch label spooler', domain: 'New Enterprise Features' },
  { id: 339, name: 'Asynchronous export with notification', domain: 'New Enterprise Features' },
  { id: 340, name: 'Database self-heal dashboard', domain: 'New Enterprise Features' },
  { id: 341, name: 'Three-tier backup strategy UI', domain: 'New Enterprise Features' },
  { id: 342, name: 'Read-replica routing', domain: 'New Enterprise Features' },
  { id: 343, name: 'Request coalescing', domain: 'New Enterprise Features' },
  { id: 344, name: 'Web Worker IMEI validation', domain: 'New Enterprise Features' },
  { id: 345, name: 'IndexedDB product cache', domain: 'New Enterprise Features' },
  { id: 346, name: 'Bulk SKU generation', domain: 'New Enterprise Features' },
  { id: 347, name: 'Customer account freeze toggle', domain: 'New Enterprise Features' },
  { id: 348, name: 'Repair part substitution log', domain: 'New Enterprise Features' },
  { id: 349, name: 'Cash drawer soft count', domain: 'New Enterprise Features' },
  { id: 350, name: 'Supplier minimum order quantity (MOQ) alert', domain: 'New Enterprise Features' }
];

const User = require('./models/User');
const Store = require('./models/Store');
const Product = require('./models/Product');
const Customer = require('./models/Customer');

async function seed() {
  try {
    const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/lakki_terminal';
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB.');

    await Feature.deleteMany({});
    console.log('Cleared existing features.');

    // Generate any missing IDs up to 367
    const fullFeatures = [];
    for (let i = 1; i <= 367; i++) {
      const existing = rawData.find(f => f.id === i);
      if (existing) {
        fullFeatures.push({
          featureId: existing.id,
          name: existing.name,
          domain: existing.domain,
          requiresApiKey: existing.requiresApiKey || false,
          apiKeyName: existing.apiKeyName || null
        });
      } else {
        fullFeatures.push({
          featureId: i,
          name: `Unassigned Feature #${i}`,
          domain: 'Uncategorized'
        });
      }
    }

    await Feature.insertMany(fullFeatures);
    console.log(`Successfully seeded ${fullFeatures.length} features.`);

    // Clear other collections
    await User.deleteMany({});
    await Store.deleteMany({});
    await Product.deleteMany({});
    await Customer.deleteMany({});

    // Seed Stores
    const stores = await Store.insertMany([
      { name: 'Downtown Terminal - T01', location: '450 Commerce Way, District 4' },
      { name: 'North Plaza Station - T09', location: '92 Skyline Drive, North Sector' },
      { name: 'Central Warehouse - W01', location: 'Industrial Area 5' }
    ]);
    console.log('Seeded 3 stores.');

    // Seed Users
    const bcrypt = require('bcryptjs');
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash('Admin123!', salt);
    const pinHash = await bcrypt.hash('1234', salt);

    const defaultAccessKeyHash = await bcrypt.hash('1234', salt);

    await User.insertMany([
      { email: 'admin@lakki.com', operatorId: 'OP-001', passwordHash: hash, accessKey: defaultAccessKeyHash, name: 'Super Admin', role: 'SA', homeStoreId: stores[0]._id, managerPinHash: pinHash },
      { email: 'manager@lakki.com', operatorId: 'OP-002', passwordHash: hash, accessKey: defaultAccessKeyHash, name: 'Store Manager', role: 'MGR', homeStoreId: stores[0]._id, managerPinHash: pinHash },
      { email: 'cashier@lakki.com', operatorId: 'OP-003', passwordHash: hash, accessKey: defaultAccessKeyHash, name: 'Cashier One', role: 'CSH', homeStoreId: stores[0]._id },
      { email: 'tech@lakki.com', operatorId: 'OP-004', passwordHash: hash, accessKey: defaultAccessKeyHash, name: 'Tech Miller', role: 'TECH', homeStoreId: stores[0]._id },
      { email: 'inv@lakki.com', operatorId: 'OP-005', passwordHash: hash, accessKey: defaultAccessKeyHash, name: 'Inventory Clerk', role: 'INV', homeStoreId: stores[2]._id },
      { email: 'auditor@lakki.com', operatorId: 'OP-006', passwordHash: hash, accessKey: defaultAccessKeyHash, name: 'Security Auditor', role: 'AUD' }
    ]);
    console.log('Seeded 6 users.');

    // Seed Products
    const categories = ['Smartphones', 'Accessories', 'Wearables', 'Tablets'];
    const images = [
      'https://images.unsplash.com/photo-1592899677974-c46414c11fa0?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=400&q=80'
    ];

    const products = Array.from({ length: 50 }, (_, i) => {
      const category = categories[i % categories.length];
      const imageUrl = images[i % images.length];
      return {
        sku: `SKU-${1000 + i}`,
        name: `Device ${i % 2 === 0 ? 'Pro' : 'Standard'} Model ${String.fromCharCode(65 + (i % 26))}`,
        price: Math.floor(Math.random() * 1000) + 50,
        cost: Math.floor(Math.random() * 500) + 20,
        category: category,
        imageUrl: imageUrl,
        stockByStore: stores.map(s => ({ storeId: s._id, quantity: Math.floor(Math.random() * 20), binLocation: `A-${i}` })),
        requiresImei: i % 3 === 0,
        sortPriority: i % 10 === 0 ? 1 : 0
      };
    });
    await Product.insertMany(products);
    console.log('Seeded 50 products.');

    // Seed Customers
    const customers = Array.from({ length: 10 }, (_, i) => ({
      name: `Customer ${i}`,
      phone: `+1555000${i.toString().padStart(4, '0')}`,
      email: `customer${i}@example.com`,
      loyaltyPoints: Math.floor(Math.random() * 5000),
      tier: ['Silver', 'Gold', 'VIP'][i % 3],
      credit: Math.floor(Math.random() * 100)
    }));
    await Customer.insertMany(customers);
    console.log('Seeded 10 customers.');

    process.exit(0);
  } catch (err) {
    console.error('Error seeding features:', err);
    process.exit(1);
  }
}

seed();
