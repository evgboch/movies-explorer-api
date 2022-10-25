const router = require('express').Router();
const { getSavedMovies, saveMovie, deleteMovie } = require('../controllers/movies');

router.get('/movies', getSavedMovies);
router.post('/movies', saveMovie);
router.delete('/movies/:id', deleteMovie);

module.exports = router;
