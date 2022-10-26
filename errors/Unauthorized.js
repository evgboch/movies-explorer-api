const { errorStatusesList, resMessagesList } = require('../utils/constants');

class UnauthorizedError extends Error {
  constructor() {
    super(resMessagesList.unauthorized);
    this.statusCode = errorStatusesList.unauthorized;
  }
}

module.exports = UnauthorizedError;
