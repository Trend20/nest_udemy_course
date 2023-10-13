import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './tasks.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  // creating a task
  @Post('createTask')
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.createTask(createTaskDto);
  }

  // getting all tasks
  @Get('allTasks')
  async getAllTasks(): Promise<Task[]> {
    return this.taskService.getAllTasks();
  }

  // get task by id
  @Get(':id')
  async getTaskById(@Param('id') id: string): Promise<Task> {
    return this.taskService.getTaskById(id);
  }

  // delete task by id
  @Delete(':id')
  async deleteTaskById(@Param('id') id: string): Promise<void> {
    return this.taskService.deleteTaskById(id);
  }

  // update task by id
  @Patch(':id/status')
  async updateTaskById(
    @Param('id') id: string,
    @Body() status: TaskStatus,
  ): Promise<Task> {
    return this.taskService.updateTaskById(id, status);
  }
}
