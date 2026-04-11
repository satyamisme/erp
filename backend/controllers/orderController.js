const Order = require('../models/Order');
const Product = require('../models/Product');

exports.createOrder = async (req, res) => {
  try {
    const { items, paymentMethod } = req.body;
    const operatorId = req.user?.operatorId || 'Unknown Operator'; // Will be set by auth middleware

    if (!items || items.length === 0) {
      return res.status(400).json({ message: 'No items provided' });
    }

    let subtotal = 0;
    const orderItems = [];

    // Verify products and calculate totals
    for (const item of items) {
      const product = await Product.findById(item.productId);
      if (!product) {
        return res.status(404).json({ message: `Product not found: ${item.productId}` });
      }
      if (product.stock < item.quantity) {
        return res.status(400).json({ message: `Insufficient stock for ${product.name}` });
      }

      const itemTotal = product.price * item.quantity;
      subtotal += itemTotal;
      orderItems.push({
        product: product._id,
        quantity: item.quantity,
        price: product.price
      });

      // Decrease stock
      product.stock -= item.quantity;
      await product.save();
    }

    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + tax;

    const order = new Order({
      operatorId,
      items: orderItems,
      subtotal,
      tax,
      total,
      paymentMethod
    });

    await order.save();
    res.status(201).json({ message: 'Order completed successfully', orderId: order._id });

  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
