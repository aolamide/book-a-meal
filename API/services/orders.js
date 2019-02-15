import Orders from '../models/orders';
import placeholderData from '../utils/placeholderData';

const OrdersServices = {
  makeOrder(order) {
    const existingLength = placeholderData.orders.length;
    const highestId = placeholderData.orders[existingLength - 1].orderId;
    const newId = highestId + 1;
    const newOrder = new Orders();
    newOrder.orderId = newId;
    newOrder.customerId = order.customerId;
    newOrder.mealsOrdered = order.mealsOrdered;
    newOrder.total = order.total;
    placeholderData.orders.push(newOrder);
    return newOrder;
  },
  getAllOrders() {
    const allOrders = placeholderData.orders.map((order) => {
      const singleOrder = new Orders();
      singleOrder.orderId = order.orderId;
      singleOrder.customerId = order.customerId;
      singleOrder.orderTime = order.orderTime;
      singleOrder.mealsOrdered = order.mealsOrdered;
      singleOrder.total = order.total;
      singleOrder.deliveryStatus = order.deliveryStatus;
      return singleOrder;
    });
    return allOrders;
  },
};

export default OrdersServices;
