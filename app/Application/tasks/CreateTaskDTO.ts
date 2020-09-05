import Task from '../../Domain/core/Task';

export default class CreateTaskDTO {
  task: Task;

  constructor(name: string) {
    this.task = Task.createFromDetailsObject({ name });
  }

  getTask() {
    return this.task;
  }
}
