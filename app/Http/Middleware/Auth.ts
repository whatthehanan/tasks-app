import { Response, NextFunction } from 'express';
import AuthUtil from '../../Infrastructure/Utils/AuthUtil';
import UserService from '../../Application/users/UserService';
import { DecodedRequest } from '../Utils/MakeExpressCallback';
import GetUserDTO from '../../Application/users/GetUserDTO';

const AuthMiddleware = async (
  req: DecodedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.header('Authorization');

    if (!!!token) {
      throw Error('no token');
    }

    const res: any = await AuthUtil.verifyJwtToken(token);

    if (!res.isValid) {
      throw Error('invalid token');
    }

    const userId = res.decoded.userId;
    const input = new GetUserDTO(userId);
    const user = await UserService.getUser(input);

    if (!!!user) {
      throw Error('invalid token');
    }

    req.user = user;
    return next();
  } catch (err) {
    return res.status(401).json({
      message: 'unAuthorized',
    });
  }
};

export default AuthMiddleware;
