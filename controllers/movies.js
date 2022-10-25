const Movie = require('../models/movie');

function getSavedMovies(req, res, next) {
  Movie.find({})
    .then((movies) => {
      res.send(movies);
    });
};

function saveMovie(req, res, next) {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;

  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    owner: req.user._id,
    movieId,
    nameRU,
    nameEN,
  })
    .then((movie) => {
      res.send(movie);
    });
}

function deleteMovie(req, res, next) {
  Movie.findById(req.params.id)
    .then((movie) => {
      if (movie.owner.toString() === req.user._id) {
        movie.remove()
          .then(() => {
            res.send({
              message: 'Фильм удалён',
            });
          });
      }
    });
}

module.exports = { getSavedMovies, saveMovie, deleteMovie };
