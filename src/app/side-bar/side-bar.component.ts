import { Component, Input, OnInit } from '@angular/core';
import { TaskList } from '../main-view/taskList';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  @Input() projects!: TaskList[] 
  
}
