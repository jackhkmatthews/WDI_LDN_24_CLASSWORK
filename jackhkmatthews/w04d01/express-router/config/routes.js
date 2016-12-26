const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  return res.render('index', {title: 'Welcome to my website.'});
});

router.get('/about', (req, res) => {
  return res.render('about', {title: 'About my website.'});
});

router.get('/contact', (req, res) => {
  return res.render('contact', {title: 'Contact for for things'});
});

module.exports.router = router;
