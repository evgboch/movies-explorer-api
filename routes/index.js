const router = require('express').Router();
const { celebrate } = require('celebrate');
const { userRegisterValidation, userLoginValidation } = require('../utils/validationData');
const { createUser, login } = require('../controllers/users');
const checkAuthorization = require('../middlewares/auth');
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const handleIncorrectPath = require('./incorrectPath');

router.post('/signup', celebrate(userRegisterValidation), createUser);
router.post('/signin', celebrate(userLoginValidation), login);
router.use(checkAuthorization);
router.use('/users', usersRouter);
router.use('/movies', moviesRouter);
router.use('*', handleIncorrectPath);

module.exports = router;
