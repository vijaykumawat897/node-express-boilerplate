const { Messages } = require("@constants/index");
const { StatusCodes } = require("http-status-codes");

class AppError extends Error {
  constructor(
    explaination = [],
    statusCode = StatusCodes.INTERNAL_SERVER_ERROR,
    message = Messages.ERROR.SOMETHING_WRONG
  ) {
    super(message);
    this.statusCode = statusCode;
    this.explaination = explaination;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
