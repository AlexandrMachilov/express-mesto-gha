class ErrorUnauthorized extends Error {
  constructor(message) {
    super(message);
    this.errorMessage = message;
    this.statusCode = 401;
  }
}

module.exports = ErrorUnauthorized;
