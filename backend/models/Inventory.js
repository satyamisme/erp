const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  storeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true, default: 0 },
  binLocation: { type: String },
  reservedQuantity: { type: Number, default: 0 } // For holds or pending transfers
}, { timestamps: true });

// Compound index to ensure uniqueness per product per store
inventorySchema.index({ storeId: 1, productId: 1 }, { unique: true });

module.exports = mongoose.model('Inventory', inventorySchema);
