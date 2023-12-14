import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../main-view/taskList';
import { TaskManagementService } from '../../services/TaskManagement.service';

@Component({
  selector: 'app-completed-task-item',
  templateUrl: './completed-task-item.component.html',
  styleUrls: ['./completed-task-item.component.scss'],
})
export class CompletedTaskItemComponent implements OnInit {
  constructor(private taskManagementService: TaskManagementService
  ) {}

  ngOnInit() {
    console.log(this.task)
  }

  @Input() task!: Task;

  completeTask() {
    this.taskManagementService.toggleCompleteTask(this.task);
  }

  deleteTaskItem() {
    this.taskManagementService.deleteTask(this.task);
  }
}
