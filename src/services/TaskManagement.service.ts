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

  toggleTaskCompleted$ = this.toggleTaskCompleted.asObservable();
  taskDeleted$ = this.taskDeleted.asObservable();
  taskMarkedAsImportant$ = this.taskMarkedAsImportant.asObservable();

  toggleCompleteTask(taskItem: Task) {
    this.toggleTaskCompleted.next(taskItem);
  }

  deleteTask(taskItem: Task) {
    this.taskDeleted.next(taskItem);
  }

  toggleMarkedAsImportant(taskItem: Task) {
    this.taskMarkedAsImportant.next(taskItem);
  }

  constructor() {}
}
