import { Injectable } from '@nestjs/common';
import { Task } from './tasks.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    // { name: 'clean the latrine', id: 1 },
    // { name: 'wash the cow', id: 2 },
    // { name: 'blow the air', id: 3 },
    // { name: 'milk the donkey', id: 4 },
    // { name: 'chop the big tree', id: 5 },
  ];

  getAllTasks(): Task[] {
    return this.tasks;
  }
}
