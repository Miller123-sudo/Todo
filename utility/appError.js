/**
 * All The error we created using this class is "OPERATIONAL ERROR"
 *
 * OPERATIONAL ERROR means, errors that we can predict like wrong url, missing require field data in
 * req body, server or database connection fail error etc.
 */
class AppError extends Error {
  constructor(message, statusCode) {
    super();
    this.message = message;
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;
    this.isSuccess = false;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
