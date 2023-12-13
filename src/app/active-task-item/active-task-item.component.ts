import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../main-view/taskList';
import { TaskManagementService } from '../../services/TaskManagement.service';

@Component({
  selector: 'app-active-task-item',
  templateUrl: './active-task-item.component.html',
  styleUrls: ['./active-task-item.component.scss'],
})
export class ActiveTaskItemComponent implements OnInit {
  constructor(private taskManagementService: TaskManagementService) {}

  ngOnInit() {}

  @Input() activeTaskItem!: Task;

  completeTask() {
    this.taskManagementService.toggleCompleteTask(this.activeTaskItem);
  }

  deleteTask() {
    this.taskManagementService.deleteTask(this.activeTaskItem);
  }

  markAsImportant() {
    this.taskManagementService.toggleMarkedAsImportant(this.activeTaskItem)
  }
}
