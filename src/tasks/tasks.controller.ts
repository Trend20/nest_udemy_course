import { Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.model';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  // creating a task
  @Post('createTask')
  createTask(): Task {
    return this.taskService.createTask('Come home', 'Not later than today');
  }

  // getting all tasks
  @Get('allTasks')
  async getAllTasks(): Promise<Task[]> {
    return this.taskService.getAllTasks();
  }
}
