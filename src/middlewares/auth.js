const { ErrorResponse } = require("@utils/common");
const AppError = require("@utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");
const { Messages } = require("@constants/index");

const validateLoginInput = (req, res, next) => {
  const { email, password } = req.body;
  let error = [];

  if (
    !email ||
    typeof email !== "string" ||
    email.trim() === "" ||
    !password ||
    typeof password !== "string" ||
    password.trim() === ""
  ) {
    error.push(Messages.AUTH.MISSING_CREDENTIALS);
  }
  if (error.length > 0) {
    ErrorResponse.message = Messages.AUTH.LOGIN_FAILED;
    ErrorResponse.error = new AppError(error, StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  req.body.email = email.trim();
  req.body.password = password.trim();

  next();
};

module.exports = { validateLoginInput };
