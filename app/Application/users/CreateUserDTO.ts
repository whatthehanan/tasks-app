import User from '../../Domain/core/User';

export default class CreateUserDTO {
  user: User;

  constructor(email: string, password: string) {
    this.user = User.createFromDetailsObject({ email, password });
  }

  getUser() {
    return this.user;
  }
}
