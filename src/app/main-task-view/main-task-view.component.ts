import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { TaskList } from '../main-view/taskList';

@Component({
  selector: 'app-main-task-view',
  templateUrl: './main-task-view.component.html',
  styleUrls: ['./main-task-view.component.scss'],
})
export class MainTaskViewComponent implements OnInit {
  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {}

  @Input() project!: TaskList;

  activeTasks = () => {
    return this.project.tasks.filter((item) => item.completed === false);
  };

  completedTasks = () => {
    return this.project.tasks.filter((item) => item.completed === true);
  };

  completedTasksVisible: Boolean = false;
  showCompletedTasksBtn: string = 'Show completed tasks';

  toggleCompletedTasksVisible() {
    this.completedTasksVisible = !this.completedTasksVisible;
    this.showCompletedTasksBtn = this.completedTasksVisible
      ? 'Hide completed tasks'
      : 'Show completed tasks';
    console.log(this.completedTasks());
    console.log(this.activeTasks());
  }
}
