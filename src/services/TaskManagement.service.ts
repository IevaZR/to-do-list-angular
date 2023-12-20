import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from '../app/main-view/taskList';


//The next three lines are required to create a new service
// @Injectable: Decorator to allow the service to be injected into other components or services.
@Injectable({
  providedIn: 'root',
})

// Next we create a new service and give it a name
//An RxJS class used to emit and listen to events/data, acting as an observable and an observer.
export class TaskManagementService {

  //Next we create a Subject
  private toggleTaskCompleted = new Subject<any>();
  private taskDeleted = new Subject<any>();
  private taskMarkedAsImportant = new Subject<any>();
  private newTask = new Subject<any>();
  private updatedTask = new Subject<any>();

  // Here the subjects are exposed as Observables - they provide read-only access to the events emitted by the corresponding Subjects
  toggleTaskCompleted$ = this.toggleTaskCompleted.asObservable();
  taskDeleted$ = this.taskDeleted.asObservable();
  taskMarkedAsImportant$ = this.taskMarkedAsImportant.asObservable();
  newTask$ = this.newTask.asObservable();
  updatedTask$ = this.updatedTask.asObservable();

  //These are event Emitters. They are responsible for emitting events through the corresponding Subjects when invoked
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
