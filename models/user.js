const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const IncorrectCredentialsError = require('../errors/IncorrectCredentials');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (v) => validator.isEmail(v),
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
});

userSchema.statics.findUserWithCredentials = function findUserWithCredentials(email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new IncorrectCredentialsError());
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new IncorrectCredentialsError());
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
