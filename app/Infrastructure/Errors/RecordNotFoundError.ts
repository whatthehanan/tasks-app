import CustomError from './CustomError';

export default class RecordNotFoundError extends CustomError {
  constructor(message: string) {
    super(400, message);
    CustomError.captureStackTrace(this, RecordNotFoundError);
  }
}
