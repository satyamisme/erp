const mongoose = require('mongoose');

const transferSchema = new mongoose.Schema({
  transferId: { type: String, required: true, unique: true },
  sourceStoreId: { type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: true },
  destStoreId: { type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: true },
  items: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    sku: String,
    quantity: Number,
    value: Number, // unit value at time of transfer
    imeiList: [String] // If transferring specific IMEI tracked items
  }],
  status: {
    type: String,
    enum: ['Requested', 'Shipped', 'In-Transit', 'Received', 'Cancelled'],
    default: 'Requested'
  },
  type: { type: String, enum: ['Permanent', 'Loan'], default: 'Permanent' },
  returnDate: { type: Date }, // For Loan types
  driverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Or Mandoob string
  manifestQR: { type: String }, // Link to generated QR or image
}, { timestamps: true });

module.exports = mongoose.model('Transfer', transferSchema);
