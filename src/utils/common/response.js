const { Messages } = require("@constants/index");

const success = (
  data = {},
  message = Messages.ERROR.REQUEST_SUCCESS,
  error = {}
) => ({
  success: true,
  message,
  data,
  error,
});

const error = (
  error = {},
  message = Messages.ERROR.SOMETHING_WRONG,
  data = {}
) => {
  console.log("error", error);
  return {
    success: false,
    message,
    data,
    error,
  };
};

module.exports = { success, error };
