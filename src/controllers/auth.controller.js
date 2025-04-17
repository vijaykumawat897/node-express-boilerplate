const { AuthService } = require("@services/index");
const { SuccessResponse } = require("@utils/common");
const { StatusCodes } = require("http-status-codes");

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await AuthService.login({ email, password });
    SuccessResponse.data = result;
    res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (err) {
    next(err);
  }
};

module.exports = { login };
