const { errorStatusesList, resMessagesList } = require('../utils/constants');

class ForbiddenError extends Error {
  constructor() {
    super(resMessagesList.forbidden);
    this.statusCode = errorStatusesList.forbidden;
  }
}

module.exports = ForbiddenError;
