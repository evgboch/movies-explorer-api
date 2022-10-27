const IncorrectPathError = require('../errors/IncorrectPath');

function handleIncorrectPath(req, res, next) {
  next(new IncorrectPathError());
}

module.exports = handleIncorrectPath;
