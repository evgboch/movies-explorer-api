const router = require('express').Router();
const usersRouter = require('./users');
const moviesRouter = require('./movies');

router.use('/signup', createUser);
router.use('/signin', login);

router.use('/users', usersRouter);
router.use('/movies', moviesRouter);

module.exports = router;
