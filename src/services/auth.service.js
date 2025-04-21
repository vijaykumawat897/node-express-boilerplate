const bcrypt = require("bcryptjs");
const { StatusCodes } = require("http-status-codes");
const AppError = require("@utils/errors/app-error");
const { Messages } = require("@constants/index");
const { AuthRepository } = require("@repositories/index");

const login = async ({ email, password }) => {
  // Put your login logic here
  
  // For Example:
  const user = await AuthRepository.findUserByEmailOrUsername(email);
  if (!user) {
    throw new AppError(
      [Messages.AUTH.INCORRECT_EMAIL_PASSWORD],
      StatusCodes.UNAUTHORIZED,
      Messages.AUTH.LOGIN_FAILED
    );
  }
  return user;
};

module.exports = { login };
