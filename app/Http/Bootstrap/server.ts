import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import { Response, Request, NextFunction } from 'express';

dotenv.config();
// eslint-disable-next-line import/no-unresolved

const environment = process.env.NODE_ENV;
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

if (environment !== 'production') {
  app.use(logger('dev'));
}

/**
 * Error middleware
 * gives json response in case of error
 */
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;

  // eslint-disable-next-line no-console
  console.log('------\n');
  // eslint-disable-next-line no-console
  console.log(err);
  // eslint-disable-next-line no-console
  console.log('\n------');

  return res.status(status).send({
    message: 'Error!',
    subMessage: err.message,
    fileName: err.fileName,
    lineNumber: err.lineNumber,
    toString: err.toString(),
    stack: err.stack,
  });
});

export default app;
