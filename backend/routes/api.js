const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

// Public routes (or could be protected depending on needs)
router.get('/products', productController.getProducts);

// Protected routes
router.post('/orders', authMiddleware, orderController.createOrder);

module.exports = router;
