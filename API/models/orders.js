/*
 {
    orderId,
    customerId,
    orderTime : new Date(),
    order: [],
    total,
    deliveryStatus: false,
    catererId
  }
*/

class Orders {
  constructor() {
    this.orderId = null;
    this.mealsOrdered = [];
    this.customerId = null;
    this.orderTime = new Date().toLocaleString();
    this.total = null;
    this.deliveryStatus = false;
  }
}

export default Orders;
