import { Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.model';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  // test the api for creating a task
  @Post('createTask')
  async createTask() {
    return 'I am creating a new tasks';
  }

  // test the api for getting all tasks
  @Get('allTasks')
  async getAllTasks(): Promise<Task[]> {
    return this.taskService.getAllTasks();
  }
}
