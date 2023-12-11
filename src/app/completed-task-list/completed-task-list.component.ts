import { Component, OnInit, Input} from '@angular/core';
import { Task } from '../main-view/taskList';

@Component({
  selector: 'app-completed-task-list',
  templateUrl: './completed-task-list.component.html',
  styleUrls: ['./completed-task-list.component.scss']
})
export class CompletedTaskListComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }

  @Input() tasks!: Task[] 
}
