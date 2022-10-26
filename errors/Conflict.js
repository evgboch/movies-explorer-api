const { errorStatusesList, resMessagesList } = require('../utils/constants');

class ConflictError extends Error {
  constructor() {
    super(resMessagesList.conflict);
    this.statusCode = errorStatusesList.conflict;
  }
}

module.exports = ConflictError;
