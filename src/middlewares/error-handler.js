const { Messages } = require("@constants/index");
const { ErrorResponse } = require("@utils/common");
const AppError = require("@utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");

const errorHandler = (err, req, res, next) => {
  console.error("err", err);

  if (!(err instanceof AppError)) {
    if (["TypeError", "Error"].includes(err.name)) {
      err = new AppError(
        [Messages.ERROR.SERVER_MISCONFIGURATION_ERROR],
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    } else {
      err = new AppError(
        [Messages.ERROR.SERVER_ERROR],
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
  ErrorResponse.error = err;
  res.status(err.statusCode).json(ErrorResponse);
};

module.exports = errorHandler;
