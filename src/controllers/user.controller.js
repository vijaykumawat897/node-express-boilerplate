// const userService = require("../services/user.service");

const { UserService } = require("@services/index");
const { SuccessResponse } = require("@utils/common");
const AppError = require("@utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");

const getUsers = async (req, res, next) => {
  try {
    const users = await UserService.getAllUsers();
    SuccessResponse.data = users;
    res.json(SuccessResponse);
  } catch (err) {
    console.log("err", err);

    let error = err;
    if (err.name === "TypeError") {
      error = new AppError(
        [
          "The server encountered an internal error or misconfiguration and was unable to complete your requst",
        ],
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    // const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

module.exports = { getUsers, createUser };
