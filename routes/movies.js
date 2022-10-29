const router = require('express').Router();
const { celebrate } = require('celebrate');
const { movieSaveValidation, movieDeleteValidation } = require('../utils/validationData');
const { getSavedMovies, saveMovie, deleteMovie } = require('../controllers/movies');

router.get('/', getSavedMovies);
router.post('/', celebrate(movieSaveValidation), saveMovie);
router.delete('/:id', celebrate(movieDeleteValidation), deleteMovie);

module.exports = router;
