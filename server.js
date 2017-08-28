const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dailyItem = require('./routes/dailyItem');
const scheduledItems = require('./routes/scheduledItems');

app.use(bodyParser.json());

app.use('/daily_items', dailyItem);
app.use('/scheduled_items', scheduledItems);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
