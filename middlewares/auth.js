const jwt = require('jsonwebtoken');
const { JWT_SECRET_DEV } = require('../utils/serverConfigs');
const UnauthorizedError = require('../errors/Unauthorized');

function checkAuthorization(req, res, next) {
  const { authorization } = req.headers;
  const { NODE_ENV, JWT_SECRET } = process.env;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    next(new UnauthorizedError());
  }

  const token = authorization.replace('Bearer ', '');
  jwt.verify(
    token,
    NODE_ENV === 'production' ? JWT_SECRET : JWT_SECRET_DEV,
    (err, data) => {
      if (err) {
        next(new UnauthorizedError());
      }
      req.user = data;
      next();
    },
  );
}

module.exports = checkAuthorization;
