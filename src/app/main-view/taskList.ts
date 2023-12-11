export interface TaskList {
  projectName: string;
  tasks: {
    taskName: string;
    completed: boolean;
  }[];
}

export interface Task {
  taskName: string;
  completed: boolean;
}
