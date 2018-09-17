import { Component, OnInit } from '@angular/core';
import { Task } from '../../model/Task';
import { TaskService } from '../../services/task.service';
import * as moment from 'moment';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css']
})
export class ViewTasksComponent implements OnInit {

  tasks: Array<Task> = []
  message:string = ''
  alertClass: string = "alert alert-success"

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.fetchTasks()
    .then((data)=>{
      console.log(data);

      // Convertdate using Moment JS - start
      //this.myForm.value.stStartDate = "01-Dec-2018";
      var dt = moment("2016-01-05").format('MM/DD/YYYY');
      console.log("myForm.value--> ", dt);
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          //alert(data[key].stStartDate);
          //alert(data[key].stEndDate);
          data[key].stStartDate = moment(data[key].stStartDate).format('MM/DD/YYYY');
          data[key].stEndDate = moment(data[key].stEndDate).format('MM/DD/YYYY');
          //alert(data[key].stStartDate);
          //alert(data[key].stEndDate);
        }
      }
      // Convertdate using Moment JS - end

      this.tasks = data;
    })

  }

  deleteTask(index: number){
    this.taskService.deleteTask(index)
    .then((data)=>{
      console.log(data)
    })
    .catch((err)=>{
      if(err.status == 410){
        this.alertClass = "alert alert-success"
        this.message = "Task deleted successfully!!"
      }
      console.log(err)});
  }

  updateTaskStatus(index: number){
    this.taskService.updateTaskStatus(index)
    .then((data)=>{
      console.log(data)
    })
    .catch((err)=>{
      if(err.status == 202){
        this.alertClass = "alert alert-success"
        this.message = "Task ended successfully!!"
      } else{
        this.alertClass = "alert alert-danger"
        this.message = "Failed!!"
      }
      console.log(err)});
  }

}
