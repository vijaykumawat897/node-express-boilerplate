const { Messages } = require("@constants/index");
const { authService } = require("@services/index");
const { response } = require("@utils/common");
const { StatusCodes } = require("http-status-codes");

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const result = await authService.login({ email, password });
  res
    .status(StatusCodes.OK)
    .json(Response.success(result, Messages.AUTH.LOGIN_SUCCESS));
});

module.exports = { login };
