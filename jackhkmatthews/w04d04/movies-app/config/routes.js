const router = require('express').Router();
const movies = require('../controllers/movies');

router.route('/').get((req, res) => res.render('home'));

router.route('/movies')
  .get(movies.index)
  .post(movies.create);

router.route('/movies/new')
  .get(movies.new);

module.exports = router;
