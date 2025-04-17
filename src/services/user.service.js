const { UserRepository } = require("@repositories/index");
const AppError = require("@utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");

const getAllUsers = async () => {
  // try {
    const users = await UserRepository.getAll();
    return users;
  // } catch (error) {
  //   console.log("error", error);
  //   throw new AppError(
  //     "The server encountered an internal error or misconfiguration and was unable to complete your requst",
  //     StatusCodes.INTERNAL_SERVER_ERROR
  //   );
  // }
};

module.exports = { getAllUsers };
