export default {
  meals: [
    {
      id: 1,
      name: 'Jollof Rice',
      size: 'Big',
      price: '1200',
      imageUrl: 'http://placehold.it/200x200',
    },
    {
      id: 2,
      name: 'Amala',
      size: 'Medium',
      price: '800',
      imageUrl: 'http://placehold.it/300x200',
    },
    {
      id: 3,
      name: 'Fried Rice',
      size: 'Big',
      price: '1280',
      imageUrl: 'http://placehold.it/200x300',
    },
    {
      id: 4,
      name: 'Yam nd Egg',
      size: 'Big',
      price: '1200',
      imageUrl: 'http://placehold.it/200x200',
    },
  ],
  orders: [
    {
      orderId: 1,
      customerId: 256,
      orderTime: '15/02/2019, 16:01:31',
      mealsOrdered: [
        {
          name: 'Yam and Egg',
          size: 'Small',
        },
        {
          name: 'Fufu and Okro',
          size: 'Medium',
        },
      ],
      total: 1950,
      deliveryStatus: false,
    },
    {
      orderId: 2,
      customerId: 324,
      orderTime: '15/02/2019, 17:01:31',
      mealsOrdered: [
        {
          name: 'Jollof Rice',
          size: 'Medium',
        },
        {
          name: 'Fried Rice and Fish',
          size: 'Large',
        },
      ],
      total: 2150,
      deliveryStatus: false,
    },
    {
      orderId: 3,
      customerId: 256,
      orderTime: '15/02/2019, 18:01:31',
      mealsOrdered: [
        {
          name: 'Ogi and Akara',
          size: 'Small',
        },
      ],
      total: 500,
      deliveryStatus: false,
    },
  ],
};
