import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainTaskViewComponent } from './main-task-view/main-task-view.component';
import { ActiveTaskListComponent } from './active-task-list/active-task-list.component';
import { ActiveTaskItemComponent } from './active-task-item/active-task-item.component';
import { CompletedTaskListComponent } from './completed-task-list/completed-task-list.component';
import { CompletedTaskItemComponent } from './completed-task-item/completed-task-item.component';
import { AddNewTaskComponent } from './add-new-task/add-new-task.component';
import { MainViewComponent } from './main-view/main-view.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

@NgModule({
  declarations: [									
    AppComponent,
      SideBarComponent,
      MainTaskViewComponent,
      ActiveTaskListComponent,
      ActiveTaskItemComponent,
      CompletedTaskListComponent,
      CompletedTaskItemComponent,
      AddNewTaskComponent,
      MainViewComponent,
      EditTaskComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
