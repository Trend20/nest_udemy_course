export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

enum TaskStatus {
  DONE = 'DONE',
  IN_PROGRESS = 'IN_PROGRESS',
  OPEN = 'OPEN',
}
