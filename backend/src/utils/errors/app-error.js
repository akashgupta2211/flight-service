class AppError extends Error {
  constructor(message, StatusCode) {
    super(message);
    this.explanation = message;
    this.StatusCode = StatusCode;
  }
}
module.exports = AppError;
