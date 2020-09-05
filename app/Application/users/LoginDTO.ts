export default class LoginDTO {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  /**
   *
   * @return {string}
   */
  getEmail() {
    return this.email;
  }

  /**
   *
   * @return {string}
   */
  getPassword() {
    return this.password;
  }
}
