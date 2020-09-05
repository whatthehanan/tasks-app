import { Response, Request, NextFunction } from 'express';
import app from './server';

import UserRouter from '../Routes/UserRoutes';
import TaskRouter from '../Routes/TaskRoutes';

const apiVersion = '/api/v1';

app.use(`${apiVersion}/users`, UserRouter);
app.use(`${apiVersion}/tasks`, TaskRouter);

/**
 * Error middleware
 * gives json response in case of error
 */
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;

  return res.status(status).send({
    message: 'Error!',
    subMessage: err.message,
    fileName: err.fileName,
    lineNumber: err.lineNumber,
    toString: err.toString(),
    stack: err.stack,
  });
});
