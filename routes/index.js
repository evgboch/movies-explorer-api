const router = require('express').Router();
const { createUser, login } = require('../controllers/users');
const checkAuthorization = require('../middlewares/auth');
const usersRouter = require('./users');
const moviesRouter = require('./movies');

router.post('/signup', createUser);
router.post('/signin', login);
router.use(checkAuthorization);
router.use('/users', usersRouter);
router.use('/movies', moviesRouter);

module.exports = router;
