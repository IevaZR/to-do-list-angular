import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskList } from '../main-view/taskList';
import { Store } from '@ngrx/store';
import { addNewProjectAction } from '../store/tasks.actions';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  constructor(private store: Store<any>) {}

  ngOnInit() {}

  @Input() projects!: TaskList[];

  @Output() showProjectEvent = new EventEmitter<string>();
  showProject(item: string) {
    this.showProjectEvent.emit(item);
  }

  newProjectName: string = '';
  addNewProjectFieldVisible: boolean = false;

  addNewProject() {
    this.store.dispatch(
      addNewProjectAction({ projectName: this.newProjectName })
    );
    this.newProjectName = ''
  }

  showInputField() {
    this.addNewProjectFieldVisible = true;
  }
}
