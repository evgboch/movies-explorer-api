const NotFoundError = require('./NotFound');
const { resMessagesList } = require('../utils/constants');

class IncorrectPathError extends NotFoundError {
  constructor() {
    super();
    this.message = resMessagesList.incorrectPath;
  }
}

module.exports = IncorrectPathError;
