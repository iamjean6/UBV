import express from 'express';
import { createOrder, updateOrderStatus, getSuccessfulOrders } from '../../controller/orderController.js';
import { protectCustomerRoute } from '../../middleware/authMiddleware.js';

const router = express.Router();

// POST Create a new order (Protected)
router.post('/', protectCustomerRoute, createOrder);

// POST Update order status (Typically called by payment callbacks or mock handlers)
router.post('/update-status', updateOrderStatus);

// GET Successful orders (Tracking)
router.get('/successful', getSuccessfulOrders);

export default router;
