import { Router } from 'express';
import TaskController from '../Controllers/TaskController';
import { makeExpressCallback } from '../Utils/MakeExpressCallback';
import AuthMiddleware from '../Middleware/Auth';

const TaskRouter = Router();

TaskRouter.post(
  '/create-task',
  AuthMiddleware,
  makeExpressCallback(TaskController.createTask),
);
TaskRouter.get(
  '/list-tasks',
  AuthMiddleware,
  makeExpressCallback(TaskController.getTasks),
);

export default TaskRouter;
