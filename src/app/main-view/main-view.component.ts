import { Component, OnInit } from '@angular/core';
import { Task, TaskList } from './taskList';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { addNewProjectAction } from '../store/tasks.actions';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {
  // taskList: TaskList[] = [
  //   {
  //     projectName: 'School',
  //     tasks: [
  //       { id: 1, taskName: 'Do homework', completed: false },
  //       { id: 2, taskName: 'Math exam', completed: false },
  //       { id: 3, taskName: 'Return books', completed: false, important: true },
  //       { id: 4, taskName: 'Buy new notebook', completed: true },
  //       { id: 5, taskName: 'Help Susan with homework', completed: false },
  //       { id: 6, taskName: 'Talk to teacher', completed: false },
  //     ],
  //   },
  //   {
  //     projectName: 'Work',
  //     tasks: [
  //       { id: 7, taskName: 'Prepare meeting agenda', completed: false },
  //       { id: 8, taskName: 'Follow up on emails', completed: false },
  //       { id: 9, taskName: 'Review report', completed: false },
  //     ],
  //   },
  //   {
  //     projectName: 'Home',
  //     tasks: [
  //       { id: 10, taskName: 'Wash dishes', completed: false },
  //       { id: 11, taskName: 'Go for walk', completed: false },
  //       { id: 12, taskName: 'Exercise', completed: false },
  //       { id: 13, taskName: 'Feed the dog', completed: true },
  //       { id: 14, taskName: 'Buy groceries', completed: false },
  //     ],
  //   },
  //   {
  //     projectName: 'Gardening',
  //     tasks: [
  //       { id: 15, taskName: 'Get rid of weeds', completed: false },
  //       { id: 16, taskName: 'Mow the grass', completed: true },
  //       { id: 17, taskName: 'Plant the apple trees', completed: false },
  //     ],
  //   },
  //   {
  //     projectName: 'Shopping',
  //     tasks: [
  //       { id: 18, taskName: 'Carrots', completed: false },
  //       { id: 19, taskName: 'Milk', completed: false },
  //       { id: 20, taskName: 'Bread', completed: false },
  //       { id: 21, taskName: 'Dog food', completed: true },
  //       { id: 22, taskName: 'Chocolate', completed: false },
  //       { id: 23, taskName: 'Salt', completed: false },
  //       { id: 24, taskName: 'Spices', completed: false },
  //       { id: 25, taskName: 'Potatoes', completed: false },
  //       { id: 26, taskName: 'Paper towels', completed: false },
  //     ],
  //   },
  // ];

  // subscription: Subscription;

  // taskList: TaskList[] = [
  //   {
  //     projectName: 'Errands',
  //     tasks: [],
  //   },
  // ];

  taskList$!: Observable<TaskList[]>;
  taskList: TaskList[] = [];
  projectToShow!: TaskList;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.taskList$ = this.store.select('tasks');
    this.taskList$.subscribe((listOfTasks) => {
      this.taskList = listOfTasks;
      this.projectToShow = this.taskList[0];
    });
  }

  showProject(projectName: string) {
    let projectIndex = this.taskList.findIndex(
      (item) => item.projectName === projectName
    );
    this.projectToShow = this.taskList[projectIndex];
  }
}
