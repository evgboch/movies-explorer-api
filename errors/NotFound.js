const { errorStatusesList, resMessagesList } = require('../utils/constants');

class NotFoundError extends Error {
  constructor() {
    super(resMessagesList.notFound);
    this.statusCode = errorStatusesList.notFound;
  }
}

module.exports = NotFoundError;
