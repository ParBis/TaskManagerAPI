import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TaskService } from './services/task.service';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterTaskPipe } from './pipes/filter-task.pipe';
import { ViewTasksComponent } from './components/view-tasks/view-tasks.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
const routes = [
  {path:"", component: ViewTasksComponent},
  {path:"add", component: AddTaskComponent},
  {path:"edit/:id", component: AddTaskComponent},
]
@NgModule({
  declarations: [
    AppComponent, FilterTaskPipe, ViewTasksComponent, AddTaskComponent
  ],
  imports: [
    BrowserModule, HttpModule, RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
