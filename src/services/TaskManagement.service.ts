import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from '../app/main-view/taskList';

@Injectable({
  providedIn: 'root',
})
export class TaskManagementService {
  private toggleTaskCompleted = new Subject<any>();
  private taskDeleted = new Subject<any>();
  private taskMarkedAsImportant = new Subject<any>();
  private newTask = new Subject<any>();
  private updatedTask = new Subject<any>();

  toggleTaskCompleted$ = this.toggleTaskCompleted.asObservable();
  taskDeleted$ = this.taskDeleted.asObservable();
  taskMarkedAsImportant$ = this.taskMarkedAsImportant.asObservable();
  newTask$ = this.newTask.asObservable();
  updatedTask$ = this.updatedTask.asObservable();

  toggleCompleteTask(taskItem: Task) {
    this.toggleTaskCompleted.next(taskItem);
  }

  deleteTask(taskItem: Task) {
    this.taskDeleted.next(taskItem);
  }

  toggleMarkedAsImportant(taskItem: Task) {
    this.taskMarkedAsImportant.next(taskItem);
  }

  addNewTask(taskItem: Task, projectName: String) {
    this.newTask.next({ taskItem, projectName });
  }

  updateTask(taskItem: Task) {
    this.updatedTask.next(taskItem);
  }

  constructor() {}
}
