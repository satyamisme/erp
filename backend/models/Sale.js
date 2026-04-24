const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
  invoiceNo: { type: String, required: true, unique: true },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  items: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    sku: String,
    name: String,
    quantity: { type: Number, required: true },
    imei: { type: String },
    unitPrice: { type: Number, required: true },
    discount: { type: Number, default: 0 }
  }],
  payments: [{
    method: { type: String, enum: ['cash', 'card', 'bnpl', 'loyalty', 'store_credit'] },
    amount: { type: Number, required: true },
    reference: String
  }],
  total: { type: Number, required: true },
  discountTotal: { type: Number, default: 0 },
  salespersonId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  storeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Store' },
  status: { type: String, enum: ['completed', 'refunded', 'voided', 'pending'], default: 'completed' },
  notes: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Sale', saleSchema);
