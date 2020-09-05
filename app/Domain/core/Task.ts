import { v1 as generateId } from 'node-uuid';

class Task {
  private constructor(public userId: string, public name: string) {
    this.userId = userId;
    this.name = name;
  }

  toStoreObject() {
    return {
      userId: this.userId,
      name: this.name,
    };
  }

  static createFromDetails(name: string) {
    return new Task(generateId(), name);
  }

  /**
   * creates task from details object, generates id with uuid
   * @param userObject
   */
  static createFromDetailsObject(userObject: any) {
    return new Task(generateId(), userObject.name);
  }

  /**
   * creates task from UserModel object
   */
  static createFromUserObject(obj: any) {
    return new Task(obj.userId, obj.name);
  }
}

export default Task;
