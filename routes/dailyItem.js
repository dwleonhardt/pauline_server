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
    console.log(data);
    res.send(data);
  });
});

module.exports = router;
