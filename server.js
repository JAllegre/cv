const express = require('express');

const PORT = process.env.PORT || 80;

const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT);
console.log(`Running on ${PORT}`);
