const express = require('express');
const router = express.Router();
const knex = require('../knex');
const bodyParser = require('body-parser');
const path = require('path');


router.use(bodyParser.urlencoded({ extended: false }));

router.use(bodyParser.json());

router.get('/:day', (req, res, err) => {
  var day = JSON.parse(req.params.day);
  console.log(day);
  var dayStart = day.start;
  var dayEnd = day.end;
  knex.select('daily_items.title', 'daily_items.instructions', 'scheduled_items.start_time', 'scheduled_items.end_time', 'scheduled_items.notes', 'scheduled_items.completed', 'scheduled_items.id as scheduled_item_id')
  .from('daily_items')
  .join('scheduled_items', 'daily_items.id', 'scheduled_items.daily_item_id')
  .whereBetween('scheduled_items.start_time', [dayStart, dayEnd])
  .then((data) => {
    console.log(data);
    res.send(data);
  });
});

module.exports = router;
