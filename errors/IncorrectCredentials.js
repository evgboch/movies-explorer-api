const UnauthorizedError = require('./Unauthorized');
const { resMessagesList } = require('../utils/constants');

class IncorrectCredentialsError extends UnauthorizedError {
  constructor() {
    super();
    this.message = resMessagesList.incorrectCredentials;
  }
}

module.exports = IncorrectCredentialsError;
