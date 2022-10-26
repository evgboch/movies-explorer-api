const router = require('express').Router();
const { getSavedMovies, saveMovie, deleteMovie } = require('../controllers/movies');

router.get('/', getSavedMovies);
router.post('/', saveMovie);
router.delete('/:id', deleteMovie);

module.exports = router;
