import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json('Welcome to my world');
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
