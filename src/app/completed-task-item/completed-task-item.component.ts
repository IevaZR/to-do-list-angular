import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../main-view/taskList';

@Component({
  selector: 'app-completed-task-item',
  templateUrl: './completed-task-item.component.html',
  styleUrls: ['./completed-task-item.component.scss']
})
export class CompletedTaskItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() task!: Task

}
