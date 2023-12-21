import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../main-view/taskList';
import { Store } from '@ngrx/store';
import { deleteTaskAction, toggleTaskCompleteAction, toggleTaskImportantAction } from '../store/tasks.actions';

@Component({
  selector: 'app-active-task-item',
  templateUrl: './active-task-item.component.html',
  styleUrls: ['./active-task-item.component.scss'],
})
export class ActiveTaskItemComponent implements OnInit {
  constructor(private store: Store<any>) {}

  ngOnInit() {}

  @Input() activeTaskItem!: Task;

  editingTask: boolean = false;

  completeTask() {
    this.store.dispatch(toggleTaskCompleteAction({task: this.activeTaskItem}))
  }

  deleteTask() {
    this.store.dispatch(deleteTaskAction({ task: this.activeTaskItem }));
  }

  markAsImportant() {
    this.store.dispatch(toggleTaskImportantAction({task: this.activeTaskItem}))
  }
}
