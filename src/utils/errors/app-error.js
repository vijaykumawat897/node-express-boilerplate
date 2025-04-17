const { StatusCodes } = require("http-status-codes");

class AppError extends Error {
  constructor(message = [], statusCode = StatusCodes.INTERNAL_SERVER_ERROR) {
    super(message);
    this.statusCode = statusCode;
    this.explaination = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
