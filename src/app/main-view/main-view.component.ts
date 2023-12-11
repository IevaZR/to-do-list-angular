import { Component, OnInit } from '@angular/core';
import { TaskList } from './taskList';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {
  constructor() {}

  ngOnInit() {
   
  }

  taskList: TaskList[] = [
    {
      projectName: 'School',
      tasks: [
        { taskName: 'Do homework', completed: false },
        { taskName: 'Math exam', completed: false },
        { taskName: 'Return books', completed: false },
        { taskName: 'Buy new notebook', completed: true },
        { taskName: 'Help Susan with homework', completed: false },
        { taskName: 'Talk to teacher', completed: false },
      ],
    },
    {
      projectName: 'Work',
      tasks: [
        { taskName: 'Prepare meeting agenda', completed: false },
        { taskName: 'Follow up on emails', completed: false },
        { taskName: 'Review report', completed: false },
      ],
    },
    {
      projectName: 'Home',
      tasks: [
        { taskName: 'Wash dishes', completed: false },
        { taskName: 'Go for walk', completed: false },
        { taskName: 'Exercise', completed: false },
        { taskName: 'Feed the dog', completed: true },
        { taskName: 'Buy groceries', completed: false },
      ],
    },
    {
      projectName: 'Gardening',
      tasks: [
        { taskName: 'Get rid of weeds', completed: false },
        { taskName: 'Mow the grass', completed: true },
        { taskName: 'Plant the apple trees', completed: false },
      ],
    },
    {
      projectName: 'Shopping',
      tasks: [
        { taskName: 'Carrots', completed: false },
        { taskName: 'Milk', completed: false },
        { taskName: 'Bread', completed: false },
        { taskName: 'Dog food', completed: true },
        { taskName: 'Chocolate', completed: false },
        { taskName: 'Salt', completed: false },
        { taskName: 'Spices', completed: false },
        { taskName: 'Potatoes', completed: false },
        { taskName: 'Paper towels', completed: false },
      ],
    },
  ];

}
