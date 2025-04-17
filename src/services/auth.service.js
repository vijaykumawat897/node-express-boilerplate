const bcrypt = require("bcryptjs");
const { StatusCodes } = require("http-status-codes");
const AppError = require("@utils/errors/app-error");
const { Messages } = require("@constants/index");
const { AuthRepository } = require("@repositories/index");

const login = async ({ email, password }) => {
  const user = await AuthRepository.findUserByEmailOrUsername(email);

  if (!user) {
    throw new AppError(
      [Messages.AUTH.INCORRECT_EMAIL_PASSWORD],
      StatusCodes.UNAUTHORIZED
    );
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new AppError(
      [Messages.AUTH.INCORRECT_EMAIL_PASSWORD],
      StatusCodes.UNAUTHORIZED
    );
  }

  // Optionally generate a JWT token here if needed
  return {
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
    },
  };
};

module.exports = { login };
