const express = require('express');
const router = express.Router();
const knex = require('../knex');
const bodyParser = require('body-parser');
const path = require('path');


router.use(bodyParser.urlencoded({ extended: false }));

router.use(bodyParser.json());

router.get('/', (req, res, err) => {
  knex('daily_items')
  .then((data) => {
    res.send(data);
  });
});

router.post('/', (req, res, err) => {
  console.log(req);
  knex.insert(req.body)
  .into('daily_items')
  .returning('*')
  .then(data => {
    res.send(data[0]);
  })
});

module.exports = router;
