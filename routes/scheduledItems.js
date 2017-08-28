const express = require('express');
const router = express.Router();
const knex = require('../knex');
const bodyParser = require('body-parser');
const path = require('path');


router.use(bodyParser.urlencoded({ extended: false }));

router.use(bodyParser.json());

router.get('/', (req, res, err) => {
  knex.select('daily_items.title', 'daily_items.instructions', 'scheduled_items.start_time', 'scheduled_items.end_time', 'scheduled_items.notes', 'scheduled_items.completed', 'scheduled_items.id as scheduled_item_id')
  .from('daily_items')
  .join('scheduled_items', 'daily_items.id', 'scheduled_items.daily_item_id')
  .then((data) => {
    console.log(data);
    res.send(data);
  });
});

module.exports = router;
