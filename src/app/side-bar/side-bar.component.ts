import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskList } from '../main-view/taskList';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() projects!: TaskList[];

  @Output() showProjectEvent = new EventEmitter<string>();
  showProject(item: string) {
    this.showProjectEvent.emit(item);
  }

  newProjectName: string = '';
  addNewProjectFieldVisible: boolean = false;

  @Output() addNewProjectToTaskList = new EventEmitter<string>();
  addNewProject(event?: any) {
    if (this.newProjectName !== '') {
      this.addNewProjectToTaskList.emit(this.newProjectName);
    }
    this.newProjectName = '';
    this.addNewProjectFieldVisible = false;
  }

  showInputField() {
    this.addNewProjectFieldVisible = true;
  }
}
