import express from 'express';

import OrdersControllers from '../controllers/orders';

const router = express.Router();

router.post('/', OrdersControllers.makeOrder);
router.get('/', OrdersControllers.getAllOrders);
router.put('/:id', OrdersControllers.updateAnOrder);
router.delete('/:id', OrdersControllers.deleteAnOrder);

export default router;
