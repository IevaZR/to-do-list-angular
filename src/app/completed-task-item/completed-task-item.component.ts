import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../main-view/taskList';
import { Store } from '@ngrx/store';
import { deleteTaskAction, toggleTaskCompleteAction } from '../store/tasks.actions';


@Component({
  selector: 'app-completed-task-item',
  templateUrl: './completed-task-item.component.html',
  styleUrls: ['./completed-task-item.component.scss'],
})
export class CompletedTaskItemComponent implements OnInit {
  constructor(private store: Store<any>) {}

  ngOnInit() {}

  @Input() task!: Task;

  completeTask() {
    this.store.dispatch(toggleTaskCompleteAction({task: this.task}))
  }

  deleteTaskItem() {
    this.store.dispatch(deleteTaskAction({task: this.task}))
  }
}
