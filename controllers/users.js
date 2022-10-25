const User = require('../models/user');

function getUserInfo(req, res, next) {
  User.findById(req.user._id)
    .then((user) => {
      res.send(user);
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
    .then((user) => {
      res.send(user);
    });
}

module.exports = {
  getUserInfo,
  updateUserInfo,
};
