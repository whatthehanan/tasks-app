import { DecodedRequest, HttpResponse } from '../Utils/MakeExpressCallback';
import CreateUserDTO from '../../Application/users/CreateUserDTO';
import UserService from '../../Application/users/UserService';
import LoginDTO from '../../Application/users/LoginDTO';

class UserController {
  static async createUser(httpRequest: DecodedRequest): Promise<HttpResponse> {
    const { email, password } = httpRequest.body;

    const input = new CreateUserDTO(email, password);
    const res = await UserService.createUser(input);

    return {
      body: {
        status: 'success',
        data: res,
      },
    };
  }

  static async loginUser(httpRequest: DecodedRequest): Promise<HttpResponse> {
    const { email, password } = httpRequest.body;

    const input = new LoginDTO(email, password);
    const token = await UserService.login(input);

    return {
      body: {
        status: 'success',
        token: token,
      },
    };
  }

  static async getUser(httpRequest: DecodedRequest): Promise<HttpResponse> {
    const { user } = httpRequest;

    return {
      body: {
        status: 'success',
        data: user,
      },
    };
  }
}

export default UserController;
