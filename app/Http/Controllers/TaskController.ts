import { DecodedRequest, HttpResponse } from '../Utils/MakeExpressCallback';
import CreateTaskDTO from '../../Application/tasks/CreateTaskDTO';
import TasksService from '../../Application/tasks/TasksService';

class UserController {
  static async createTask(httpRequest: DecodedRequest): Promise<HttpResponse> {
    const { name } = httpRequest.body;

    const input = new CreateTaskDTO(name);
    const task = await TasksService.createTask(input);

    return {
      body: {
        status: 'success',
        data: task,
      },
    };
  }

  static async getTasks(httpRequest: DecodedRequest): Promise<HttpResponse> {
    const tasks = await TasksService.listTasks();

    return {
      body: {
        status: 'success',
        data: tasks,
      },
    };
  }
}

export default UserController;
