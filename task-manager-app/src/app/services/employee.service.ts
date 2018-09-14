import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import { Employee } from '../model/Employee';

@Injectable()
export class EmployeeService {

  constructor(private http: Http) { }

  fetchEmployees(): Promise<any>{
    return this.http.get('http://localhost:8082/TaskManagerService/taskapi/tasks').toPromise()
    .then(res=>res.json())
  }
  fetchEmployee(id: number): Promise<any>{
    return this.http.get('http://localhost:8082/TaskManagerService/taskapi/task/'+id).toPromise()
    .then(res=>res.json())
  }
  updateEmployee(employee:Employee){
    return this.http.put('http://localhost:8082/TaskManagerService/taskapi/task', employee).toPromise()
  }

  addEmployee(employee:Employee): Promise<any>{
    return this.http.post('http://localhost:8082/TaskManagerService/taskapi/task', employee).toPromise()
  }

  deleteEmployee(index:number): Promise<any>{
    return this.http.delete('http://localhost:8082/TaskManagerService/taskapi/task/'+index).toPromise()
  }
}
