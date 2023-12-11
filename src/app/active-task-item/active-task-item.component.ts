import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../main-view/taskList';
import { TaskCompleteService } from '../../services/taskComplete.service';

@Component({
  selector: 'app-active-task-item',
  templateUrl: './active-task-item.component.html',
  styleUrls: ['./active-task-item.component.scss'],
})
export class ActiveTaskItemComponent implements OnInit {
  constructor(private taskComplete: TaskCompleteService) {}

  ngOnInit() {}

  @Input() activeTaskItem!: Task;

  completeTask() {
    this.taskComplete.sendClickEvent(this.activeTaskItem);
  }
}
