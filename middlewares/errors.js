const { errorStatusesList, resMessagesList } = require('../utils/constants');

function catchErrors(err, req, res, next) {
  const { stausCode = errorStatusesList.internalServerError, message } = err;

  res.status(stausCode);
  res.send({
    message: stausCode === 500
      ? resMessagesList.internalServerError
      : message,
  });

  next();
}

module.exports = catchErrors;
