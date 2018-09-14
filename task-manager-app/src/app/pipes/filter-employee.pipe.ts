import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../model/Employee';

@Pipe({
  name: 'filterEmployee'
})
export class FilterEmployeePipe implements PipeTransform {

  transform(employees: Array<Employee>, searchString: string): any {
    //console.log(employees);
    console.log("searchString--> " + searchString);
    let serachedEmployees = employees.filter((employee)=> employee.task.includes(searchString))
    return serachedEmployees;
  }

}
