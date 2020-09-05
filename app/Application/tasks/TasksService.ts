import Task from '../../Domain/core/Task';
import CreateTaskDTO from './CreateTaskDTO';
import TaskDTO from '../../Domain/core/TaskDTO';

class TaskService {
  tasks: Task[] = [];

  async createTask(createTaskDTO: CreateTaskDTO): Promise<TaskDTO> {
    const task = createTaskDTO.getTask();
    this.tasks.push(task);
    return task.toDTO();
  }

  async listTasks(): Promise<TaskDTO[]> {
    return this.tasks.map((task) => task.toDTO());
  }
}

export default new TaskService();
