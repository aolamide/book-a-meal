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
  updateAnOrder(req, res) {
    const updatedOrder = req.body;
    const { id } = req.params;
    const newOrder = OrdersServices.updateAnOrder(id, updatedOrder);
    return res.json({
      status: 'success',
      newOrder,
    });
  },
  deleteAnOrder(req, res) {
    const { id } = req.params;
    const deletedStatus = OrdersServices.deleteAnOrder(id);
    return res.json({
      deletedStatus,
    });
  },
};

export default OrdersController;
