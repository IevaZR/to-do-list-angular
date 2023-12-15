import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../main-view/taskList';
import { TaskManagementService } from '../../services/TaskManagement.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  constructor(private taskManagementService: TaskManagementService) { }

  ngOnInit() {
  }

  @Input() taskItem!:Task
  @Output() setEditingInactive = new EventEmitter<boolean>
  
  updateTask(event? : any) {
    this.taskManagementService.updateTask(this.taskItem);
    this.setEditingInactive.emit(false)
    console.log(this.taskItem)
  }

}
