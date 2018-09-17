import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../model/Task';

@Pipe({
  name: 'filterTask'
})
export class FilterTaskPipe implements PipeTransform {

  d:Date
  /*transform(tasks: Array<Task>, searchString: string): any {
    //console.log(tasks);
    console.log("searchString--> " + searchString);
    let serachedTasks = tasks.filter((task)=> task.task.includes(searchString))
    return serachedTasks;
  }*/

  
  transform(tasks: Array<Task>, taskSearch: string, parentTaskSearch: string,
    priorityFromSearch: number, priorityToSearch: number, dateFromSearch: Date, dateToSearch: Date){
    //alert(taskSearch + "--" + parentTaskSearch);
    //alert(dateFromSearch);
    //this.d = new Date(dateFromSearch);
    //alert(this.d.getMonth()+1 + "/" + this.d.getDate() + "/" + this.d.getFullYear);
    
    
    if (tasks && tasks.length){
        return tasks.filter(task =>{
            if (taskSearch && task.task.toLowerCase().indexOf(taskSearch.toLowerCase()) == -1){
                return false;
            }
            if (parentTaskSearch && task.parentTask.toLowerCase().indexOf(parentTaskSearch.toLowerCase()) == -1){
                return false;
            }
            if (priorityFromSearch && task.priority >= priorityFromSearch == false){
                return false;
            }
            if (priorityToSearch && task.priority <= priorityToSearch == false){
                return false;
            }

            let leftFrom = Number(new Date(dateFromSearch));
            let rightFrom = Number(new Date(task.stStartDate));
            if (dateFromSearch && rightFrom >= leftFrom == false){
                return false;
            }
            let leftTo = Number(new Date(dateToSearch));
            let rightTo = Number(new Date(task.stEndDate));
            if (dateToSearch && rightTo <= leftTo == false){
                return false;
            }
            return true;
       })
    }
    else{
        return tasks;
    }
}

}
