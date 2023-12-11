import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from '../app/main-view/taskList';

@Injectable({
  providedIn: 'root',
})
export class TaskCompleteService {
  private clickEvent = new Subject<any>();
  clickEvent$ = this.clickEvent.asObservable();

  sendClickEvent(taskItem: Task) {
    this.clickEvent.next(taskItem);
  }

  constructor() {}
}
