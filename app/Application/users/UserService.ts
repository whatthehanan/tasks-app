import User from '../../Domain/core/User';
import CreateUserDTO from './CreateUserDTO';
import AuthUtil from '../../Infrastructure/Utils/AuthUtil';
import LoginDTO from './LoginDTO';
import GetUserDTO from './GetUserDTO';
import CustomError from '../../Infrastructure/Errors/CustomError';
import UserDTO from '../../Domain/core/UserDTO';

class UserService {
  users: User[] = [];

  async createUser(createUserDTO: CreateUserDTO): Promise<UserDTO> {
    const user = createUserDTO.getUser();
    user.setPassword(await AuthUtil.generatePassword(user._password));

    this.users.push(user);

    return user.toDTO();
  }

  async getUser(getUserDTO: GetUserDTO): Promise<UserDTO> {
    const userId = getUserDTO.getUserId();

    const user = this.users.find((user) => user.userId === userId);

    if (!user) {
      throw new CustomError(400, 'no user with this id');
    }

    return user.toDTO();
  }

  async login(loginDTO: LoginDTO): Promise<string> {
    const email = loginDTO.getEmail();

    const user = this.users.find((user) => user.email == email);

    if (!user) {
      throw new CustomError(400, 'invalid crendentials');
    }

    const isValid = AuthUtil.verifyPassword(
      loginDTO.getPassword(),
      user._password,
    );

    if (!user) {
      throw new CustomError(400, 'invalid crendentials');
    }

    return await AuthUtil.createJwtToken({ ...user.toDTO() });
  }
}

export default new UserService();
