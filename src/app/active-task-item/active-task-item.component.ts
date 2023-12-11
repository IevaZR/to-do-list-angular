import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../main-view/taskList';

@Component({
  selector: 'app-active-task-item',
  templateUrl: './active-task-item.component.html',
  styleUrls: ['./active-task-item.component.scss']
})
export class ActiveTaskItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }


  @Input() activeTaskItem!: Task
}
