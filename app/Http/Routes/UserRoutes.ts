import { Router } from 'express';
import UserController from '../Controllers/UserController';
import { makeExpressCallback } from '../Utils/MakeExpressCallback';
import AuthMiddleware from '../Middleware/Auth';

const UserRouter = Router();

UserRouter.post('/', makeExpressCallback(UserController.createUser));
UserRouter.post('/login', makeExpressCallback(UserController.loginUser));
UserRouter.get(
  '/me',
  AuthMiddleware,
  makeExpressCallback(UserController.getUser),
);

export default UserRouter;
