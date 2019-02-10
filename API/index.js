const express = require('express');

const app = express();
const port = process.env.PORT || 4000;

app.get('*', (req, res) => {
  res.json('Welcome to my world');
});

app.listen(port, () => console.log(`working ${port}`));
