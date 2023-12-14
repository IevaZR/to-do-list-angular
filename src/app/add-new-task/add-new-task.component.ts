import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../main-view/taskList';
import { TaskManagementService } from '../../services/TaskManagement.service';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.scss'],
})
export class AddNewTaskComponent implements OnInit {
  constructor(private taskManagementService: TaskManagementService) {}

  ngOnInit() {}

  @Input() currentProject!: string;

  newTodoText: string = '';

  addNewTask() {
    let newTask: Task = {
      id: Math.random() * 100,
      taskName: this.newTodoText,
      completed: false,
    };
    console.log(this.newTodoText, this.currentProject)
    this.taskManagementService.addNewTask(newTask, this.currentProject);
    this.newTodoText = '';
  }
}
