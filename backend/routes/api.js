const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

const dashboardController = require('../controllers/dashboardController');
const repairController = require('../controllers/repairController');
const financeController = require('../controllers/financeController');
const systemController = require('../controllers/systemController');

// Public routes (or could be protected depending on needs)
router.get('/products', productController.getProducts);

// Protected routes
router.post('/orders', authMiddleware, orderController.createOrder);

// Dashboard routes (using mock logic)
router.get('/dashboard/executive', dashboardController.getExecutiveSummary);
router.get('/dashboard/inventory', dashboardController.getInventoryMatrix);
router.get('/dashboard/jobs', dashboardController.getBatchJobs);

// Repair & CRM
router.get('/repair/tickets', repairController.getRepairTickets);
router.get('/crm/customer', repairController.getCustomerProfile);

// Finance & Logistics
router.get('/finance/transfer', financeController.getTransferStatus);
router.get('/finance/z-report', financeController.getZReport);

// Governance & Health
router.get('/system/governance', systemController.getGovernanceData);
router.patch('/system/feature/:id', systemController.updateFeature);
router.get('/system/health', systemController.getSystemHealth);

module.exports = router;
