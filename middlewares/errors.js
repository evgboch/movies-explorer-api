const { errorStatusesList, resMessagesList } = require('../utils/constants');

function catchErrors(err, req, res, next) {
  const { statusCode = errorStatusesList.internalServerError, message } = err;

  res.status(statusCode);
  res.send({
    message: statusCode === 500
      ? resMessagesList.internalServerError
      : message,
  });

  next();
}

module.exports = catchErrors;
