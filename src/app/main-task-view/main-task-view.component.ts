import { Component, Input, OnInit } from '@angular/core';
import { TaskList } from '../main-view/taskList';

@Component({
  selector: 'app-main-task-view',
  templateUrl: './main-task-view.component.html',
  styleUrls: ['./main-task-view.component.scss']
})
export class MainTaskViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(this.activeTasks())
  }

  @Input() project!: TaskList

  activeTasks = () => {
    return this.project.tasks.filter((item) => item.completed === false)
  }

  completedTasks = () => {
    return this.project.tasks.filter((item) => item.completed === true)
  }

}
