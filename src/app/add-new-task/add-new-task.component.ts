import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../main-view/taskList';
import { Store } from '@ngrx/store';
import { addNewTaskAction } from '../store/tasks.actions';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.scss'],
})
export class AddNewTaskComponent implements OnInit {
  constructor(private store: Store<any>) {}

  ngOnInit() {}

  @Input() currentProject!: string;

  newTodoText: string = '';

  addNewTask(event?: any) {
    let newTask: Task = {
      id: Math.random() * 100,
      taskName: this.newTodoText,
      completed: false,
    };

    this.store.dispatch(
      addNewTaskAction({ projectName: this.currentProject, task: newTask })
    );
    this.newTodoText = '';
  }
}
