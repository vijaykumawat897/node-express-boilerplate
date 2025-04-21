const Messages = {
  AUTH: {
    LOGIN_SUCCESS: "Logged in successfully",
    LOGIN_FAILED: "Login failed",
    MISSING_LOGIN_CREDENTIALS: "Email and password are required",
    UNAUTHORIZED: "Unauthorized",
    INVALID_TOKEN: "Invalid token",
    INCORRECT_EMAIL_PASSWORD: "Incorrect email or password",
    MISSING_DATA: "Missing required data",
  },
  USER: {
    NOT_FOUND: "User not found",
    ALREADY_EXISTS: "User already exists",
    CREATED: "User created successfully",
    UPDATED: "User updated successfully",
    DELETED: "User deleted successfully",
  },
  ERROR: {
    SOMETHING_WRONG: "Something went wrong",
    SERVER_ERROR: "Internal Server Error",
    VALIDATION_ERROR: "Validation failed",
    SERVER_MISCONFIGURATION_ERROR:
      "The server encountered an internal error or misconfiguration and was unable to complete your requst",
  },
  COMMON: {
    NOT_FOUND: "Resource not found",
    REQUEST_SUCCESS: "Successfully completed the request",
  },
};
module.exports = Messages;
