import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../model/Employee';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

  employees: Array<Employee> = []
  message:string = ''
  alertClass: string = "alert alert-success"

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.fetchEmployees()
    .then((data)=>{
      console.log(data);
      this.employees = data;
    })

  }

  deleteEmployee(index: number){
    this.employeeService.deleteEmployee(index)
    .then((data)=>{
      console.log(data)
    })
    .catch((err)=>{
      if(err.status == 410){
        this.alertClass = "alert alert-success"
        this.message = "Employee deleted successfully!!"
      }
      console.log(err)});
  }

}
