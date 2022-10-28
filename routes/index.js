const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { createUser, login } = require('../controllers/users');
const checkAuthorization = require('../middlewares/auth');
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const handleIncorrectPath = require('./incorrectPath');

router.post('/signup', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    name: Joi.string().required().min(2).max(30),
  }),
}), createUser);
router.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
}), login);
router.use(checkAuthorization);
router.use('/users', usersRouter);
router.use('/movies', moviesRouter);
router.use('*', handleIncorrectPath);

module.exports = router;
