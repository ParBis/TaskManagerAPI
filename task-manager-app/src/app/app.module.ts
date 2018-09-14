import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ViewEmployeesComponent } from './components/view-employees/view-employees.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeService } from './services/employee.service';
import { HttpModule } from '@angular/http';
import { FilterEmployeePipe } from './pipes/filter-employee.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes = [
  {path:"", component: ViewEmployeesComponent},
  {path:"add", component: AddEmployeeComponent},
  {path:"edit/:id", component: AddEmployeeComponent},
]
@NgModule({
  declarations: [
    AppComponent, ViewEmployeesComponent, AddEmployeeComponent, FilterEmployeePipe
  ],
  imports: [
    BrowserModule, HttpModule, RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
