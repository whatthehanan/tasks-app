export default class GetUserDTO {
  userId: string;

  constructor(userId: string) {
    this.userId = userId;
  }

  getUserId() {
    return this.userId;
  }
}
