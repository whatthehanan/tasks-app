import { v1 as generateId } from 'node-uuid';
import UserDTO from './UserDTO';

class User {
  private password: string;

  private constructor(public userId: string, public email: string) {
    this.password = '';
  }

  /**
   * Expects hashed password & sets it to the instance property
   * Typescript setter
   * Usage: {this.password = "123456"} function is called automatically
   * @param {string} value - the hashed password
   */
  set _password(value: string) {
    this.password = value;
  }
  get _password() {
    return this.password;
  }

  setPassword(value: string) {
    this.password = value;
  }

  toDTO(): UserDTO {
    return {
      userId: this.userId,
      email: this.email,
    };
  }

  static createFromDetails(email: string) {
    return new User(generateId(), email);
  }

  /**
   * creates user from details object, generates id with uuid
   * @param userObject
   */
  static createFromDetailsObject(userObject: any) {
    return new User(generateId(), userObject.email);
  }

  /**
   * creates user from UserModel object
   */
  static createFromUserObject(obj: any) {
    return new User(obj.userId, obj.email);
  }
}

export default User;
