const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('<h1>Hello from Express</h1>');
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
