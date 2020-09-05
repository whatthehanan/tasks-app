import CustomError from './CustomError';

export default class UnauthorizedError extends CustomError {
  constructor(message: string) {
    super(401, message);
    CustomError.captureStackTrace(this, UnauthorizedError);
  }
}
