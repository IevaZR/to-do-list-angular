export interface TaskList {
  projectName: string;
  tasks: {
    id: number,
    taskName: string;
    completed: boolean;
  }[];
}

export interface Task {
  id: number,
  taskName: string;
  completed: boolean;
}
