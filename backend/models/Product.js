const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sku: { type: String, required: true, unique: true },
  category: { type: String, required: true, enum: ['Smartphones', 'Accessories', 'Wearables', 'Tablets'] },
  price: { type: Number, required: true },
  imageUrl: { type: String },
  stock: { type: Number, default: 0 },
  pinned: { type: Boolean, default: false }
});

module.exports = mongoose.model('Product', productSchema);
