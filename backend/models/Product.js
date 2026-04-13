const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  sku: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: Number, required: true, default: 0 },
  cost: { type: Number, required: true, default: 0 },
  stockByStore: [{
    storeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Store' },
    quantity: { type: Number, default: 0 },
    binLocation: String
  }],
  isBundle: { type: Boolean, default: false },
  bundleComponents: [{
    sku: String,
    quantity: Number
  }],
  requiresImei: { type: Boolean, default: false },
  category: { type: String, default: 'Uncategorized' },
  imageUrl: { type: String },
  sortPriority: { type: Number, default: 0 },
  status: { type: String, enum: ['draft', 'active', 'archived'], default: 'active' },
  reorderPoint: { type: Number, default: 5 },
  supplierId: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' }, // Assuming a Supplier model might exist later
  hsCode: { type: String },
  customsDutyPercent: { type: Number, default: 0 },
  imeiHistory: [{ type: String }] // For IMEI-tracked items
}, { timestamps: true });

// Virtual to get total stock across all stores
productSchema.virtual('totalStock').get(function() {
  if (!this.stockByStore) return 0;
  return this.stockByStore.reduce((acc, curr) => acc + curr.quantity, 0);
});

productSchema.set('toJSON', { virtuals: true });
productSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Product', productSchema);
