import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../main-view/taskList';
import { Store } from '@ngrx/store';
import { editTaskAction } from '../store/tasks.actions';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent implements OnInit {
  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.taskName = this.taskItem.taskName;
  }

  @Input() taskItem!: Task;
  @Output() setEditingInactive = new EventEmitter<boolean>();

  taskName!: string;

  updateTask(event?: any) {
    this.store.dispatch(
      editTaskAction({ task: this.taskItem, newTaskName: this.taskName })
    );
    this.setEditingInactive.emit(false);
  }
}
