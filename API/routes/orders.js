import express from 'express';

import OrdersControllers from '../controllers/orders';

const router = express.Router();

router.post('/', OrdersControllers.makeOrder);
router.get('/', OrdersControllers.getAllOrders);

export default router;
