class CustomError extends Error {
  status: number;
  constructor(statusCode: number, message: string) {
    super(message);
    Error.captureStackTrace(this, CustomError);
    this.status = statusCode;
  }
}

export default CustomError;
