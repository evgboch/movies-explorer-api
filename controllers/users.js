const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { JWT_SECRET_DEV } = require('../utils/serverConfigs');
const BadRequestError = require('../errors/BadRequest');
const NotFoundError = require('../errors/NotFound');
const ConflictError = require('../errors/Conflict');

function createUser(req, res, next) {
  const { email, password, name } = req.body;

  bcrypt.hash(password, 10)
    .then((hash) => User.create({ email, password: hash, name }))
    .then((user) => {
      res.send({
        email: user.email,
        name: user.name,
      });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError());
      } else if (err.code === 11000) {
        next(new ConflictError());
      } else {
        next(err);
      }
    });
}

function login(req, res, next) {
  const { email, password } = req.body;
  const { NODE_ENV, JWT_SECRET } = process.env;

  return User.findUserWithCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        NODE_ENV === 'production' ? JWT_SECRET : JWT_SECRET_DEV,
        { expiresIn: '7d' },
      );

      res.send({ token });
    })
    .catch(next);
}

function getUserInfo(req, res, next) {
  User.findById(req.user._id)
    .orFail(() => {
      throw new NotFoundError();
    })
    .then((user) => {
      res.send({
        email: user.email,
        name: user.name,
      });
    })
    .catch((err) => {
      if ((err.name === 'ValidationError') || (err.name === 'CastError')) {
        next(new BadRequestError());
      } else {
        next(err);
      }
    });
}

function updateUserInfo(req, res, next) {
  const { email, name } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { email, name },
    {
      new: true,
      runValidators: true,
    },
  )
    .orFail(() => {
      throw new NotFoundError();
    })
    .then((user) => {
      res.send({
        email: user.email,
        name: user.name,
      });
    })
    .catch((err) => {
      if ((err.name === 'ValidationError') || (err.name === 'CastError')) {
        next(new BadRequestError());
      } else {
        next(err);
      }
    });
}

module.exports = {
  createUser,
  login,
  getUserInfo,
  updateUserInfo,
};
