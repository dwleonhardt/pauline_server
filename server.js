const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dailyItem = require('./routes/dailyItem');

app.use(bodyParser.json());

app.use('/daily_items', dailyItem);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
