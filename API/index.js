import express from 'express';
import bodyParser from 'body-parser';

// Routes
import mealRoutes from './routes/meal';
import ordersRoutes from './routes/orders';
import menuRoutes from './routes/menu';

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json('Welcome to my world');
});

// handlers
app.use('/api/v1/meals', mealRoutes);
app.use('/api/v1/orders', ordersRoutes);
app.use('/api/v1/menu', menuRoutes);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
