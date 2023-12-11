import { Component, Input, OnInit } from '@angular/core';
import { Task, TaskList } from '../main-view/taskList';

@Component({
  selector: 'app-active-task-list',
  templateUrl: './active-task-list.component.html',
  styleUrls: ['./active-task-list.component.scss'],
})
export class ActiveTaskListComponent implements OnInit {
  @Input() tasks!: Task[];
  
  constructor() {}

  ngOnInit() {
  }

  // project1 = this.tasks[0]
}
