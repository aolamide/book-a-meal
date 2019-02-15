import OrdersServices from '../services/orders';

const OrdersController = {
  makeOrder(req, res) {
    const orderMade = req.body;
    const newOrder = OrdersServices.makeOrder(orderMade);
    return res.json({
      status: 'success',
      data: newOrder,
    }).status(200);
  },
  getAllOrders(req, res) {
    const allOrders = OrdersServices.getAllOrders();
    return res.json({
      status: 'success',
      allOrders,
    }).status(200);
  },
};

export default OrdersController;
