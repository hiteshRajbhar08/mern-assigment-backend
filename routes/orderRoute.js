const router = require('express').Router();
const {
  createNewOrder,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
} = require('../controllers/orderController');
const { protect } = require('../middlewares/authMiddleware');

// /api/orders
router.route('/').post(protect, createNewOrder);

// /api/orders/myorders
router.route('/myorders').get(protect, getMyOrders);

// /api/orders/:id
router.route('/:id').get(protect, getOrderById);

// /api/orders/:id/pay
router.route('/:id/pay').put(protect, updateOrderToPaid);

module.exports = router;
