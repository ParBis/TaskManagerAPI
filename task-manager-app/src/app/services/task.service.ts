import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import { Task } from '../model/Task';

@Injectable()
export class TaskService {
  constructor(private http: Http) { }

  fetchTasks(): Promise<any>{
    return this.http.get('http://localhost:8082/TaskManagerService/taskapi/tasks').toPromise()
    .then(res=>res.json())
  }
  fetchTask(id: number): Promise<any>{
    return this.http.get('http://localhost:8082/TaskManagerService/taskapi/task/'+id).toPromise()
    .then(res=>res.json())
  }
  updateTask(task:Task){
    return this.http.put('http://localhost:8082/TaskManagerService/taskapi/task', task).toPromise()
  }

  addTask(task:Task): Promise<any>{
    return this.http.post('http://localhost:8082/TaskManagerService/taskapi/task', task).toPromise()
  }

  deleteTask(index:number): Promise<any>{
    return this.http.delete('http://localhost:8082/TaskManagerService/taskapi/task/'+index).toPromise()
  }

  updateTaskStatus(index:number): Promise<any>{
    return this.http.delete('http://localhost:8082/TaskManagerService/taskapi/taskStatus/'+index).toPromise()
  }
}
