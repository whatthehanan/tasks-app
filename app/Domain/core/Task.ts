import { v1 as generateId } from 'node-uuid';
import TaskDTO from './TaskDTO';

class Task {
  private constructor(public taskId: string, public name: string) {
    this.taskId = taskId;
    this.name = name;
  }

  toDTO(): TaskDTO {
    return {
      taskId: this.taskId,
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
    return new Task(obj.taskId, obj.name);
  }
}

export default Task;
