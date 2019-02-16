/*
 {
    orderId,
    customerId,
    orderTime : new Date(),
    mealsOrdered: [],
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
    this.delivered = false;
  }

  modifyOrder() {
    this.modified = true;
    this.modifiedTime = new Date().toLocaleString();
  }
}

export default Orders;
