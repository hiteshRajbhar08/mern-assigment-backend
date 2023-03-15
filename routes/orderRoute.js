const router = require('express').Router();
const { createNewOrder } = require('../controllers/orderController');

// /api/orders
router.route('/').post(createNewOrder);

module.exports = router;
