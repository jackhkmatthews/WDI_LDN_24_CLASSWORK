const express = require('express');
const router  = express.Router();

const gyms     = require('../controllers/gyms');
const statics  = require('../controllers/statics');

router.route('/')
  .get(statics.home);
router.route('/gyms')
  .get(gyms.index);

module.exports = router;
