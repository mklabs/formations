
const express = require('express');
const app = express();

const { homepage } = require('./routes');

app.get('/:user?', homepage);
app.get('/test', (req, res, next) => {
  res.send('test');
});

app.listen(3000, () => {
  console.log('Listening on http://localhost:3000');
});
