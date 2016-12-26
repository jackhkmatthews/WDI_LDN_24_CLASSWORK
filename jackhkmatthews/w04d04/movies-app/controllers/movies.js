const Movie = require('../models/movie.js');

function moviesIndex(req, res) {
  Movie.find({}, (err, movies) => {
    if (err) return res.render('movies/index', { movies: null, error: 'Something went wrong'});
    return res.render('movies/index', {movies});
  });
}

function moviesNew(req, res) {
  return res.render('movies/new');
}

function moviesCreate(req, res){
  const movie = new Movie(req.body.movie);
  movie.save(err => {
    if (err) return console.log(err);
    return res.redirect('/movies');
  });
}

// function moviesHome(req, res) {
//
// }
//
//

//
// function moviesShow(req, res){
//
// }
//
// function videoEdit(req, res){
//
// }
//
// function videoUpdate(req, res){
//
// }
//
// function moviesDelete(req, res) {
//
// }

module.exports = {
  index: moviesIndex,
  new: moviesNew,
  create: moviesCreate
  // home: moviesHome,
  // show: moviesShow,
  // edit: videoEdit,
  // update: videoUpdate,
  // delete: moviesDelete
};
