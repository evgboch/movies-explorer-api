const { errorStatusesList, resMessagesList } = require('../utils/constants');

class BadRequestError extends Error {
  constructor() {
    super(resMessagesList.badRequest);
    this.statusCode = errorStatusesList.badRequest;
  }
}

module.exports = BadRequestError;
