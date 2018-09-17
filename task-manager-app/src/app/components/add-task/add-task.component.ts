import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { TaskService } from '../../services/task.service';
import {ActivatedRoute} from "@angular/router";
import * as moment from 'moment';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  myForm: FormGroup
  message:string = ''
  alertClass: string = "alert alert-success"

  //genders: Array<string> = ['Male', 'Female']

  constructor(private taskService: TaskService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( params => {
      if(params.id){
        this.fetchTask(params.id) 
      }
    });

  }

  fetchTask(id: number){
    this.taskService.fetchTask(id)
    .then(data => {
      console.log(data);
      this.myForm.controls['taskId'].setValue(data.taskId)
      this.myForm.controls['task'].setValue( data.task);
      this.myForm.controls['parentTask'].setValue( data.parentTask);
      this.myForm.controls['priority'].setValue( data.priority);
      this.myForm.controls['stStartDate'].setValue( data.stStartDate);
      this.myForm.controls['stEndDate'].setValue( data.stEndDate);
      this.myForm.controls['taskStatus'].setValue( data.taskStatus);
    })
  }


  ngOnInit() {
      this.myForm = new FormGroup({  
              'taskId': new FormControl('' ),   
              'taskStatus': new FormControl(1),  
              'task': new FormControl('', Validators.required),
              'parentTask': new FormControl('', Validators.required),
              'stStartDate': new FormControl('', Validators.required),
              'stEndDate': new FormControl('', Validators.required),
              'priority': new FormControl(0, Validators.required)
          // 'password': new FormControl('', Validators.pattern("^[a-zA-Z0-9!@#$%^&*]{6,16}$")),
          // 'age': new FormControl('', [Validators.min(18), Validators.max(100)]),
          // 'gender': new FormControl('Male')
      })

      this.myForm.statusChanges.subscribe((data: any) => console.log(data));

  }
  
  onSubmit() {
      console.log("myForm--> " + this.myForm);
      console.log("myForm.value--> ", this.myForm.value);
      //this.myForm.value.stStartDate = "01-Dec-2018";
      //this.myForm.value.stStartDate = moment(this.myForm.value.stStartDate).format('MM/DD/YYYY');
      //console.log("myForm.value--> ", this.myForm.value);
      this.taskService.addTask(this.myForm.value)
      .then((res) => {
        console.log(res.status)
        if(res.status == 201){
          this.alertClass = "alert alert-success"
          this.message = "Task added successfully!!"
        }
      })
      .catch((res) =>{
        console.log(res.status)
        if(res.status == 409){
          this.alertClass = "alert alert-danger"
          this.message = "Task already exists!!"
        }
      })
  }
  updateTask() {
      console.log(this.myForm);
      console.log(this.myForm.value);
      this.taskService.updateTask(this.myForm.value)
      .then((res) => {
        console.log(res.status)
        if(res.status == 201){
          this.alertClass = "alert alert-success"
          this.message = "Task added successfully!!"
        }
        if(res.status == 202){
          this.alertClass = "alert alert-success"
          this.message = "Task updated successfully!!"
        }
      })
  }

  resetTask() {
    this.myForm.reset();
    this.myForm.controls['taskId'].setValue('');
    this.myForm.controls['task'].setValue('');
    this.myForm.controls['parentTask'].setValue('');
    this.myForm.controls['priority'].setValue(0);
    this.myForm.controls['stStartDate'].setValue('');
    this.myForm.controls['stEndDate'].setValue('');
  }


  // uniqueUserValidator(control: FormControl): Promise<any> {
  //     // Server to make a request, AJAX -> can take time

  //     const promise = new Promise<{ [s: string]: boolean }>(
  //         (resolve, reject) => {

  //             if (control.value && control.value!='') {

  //                 setTimeout(() => {
  //                     console.log('Validation is fired now!!')
  //                     this.http.get('http://localhost:7000/userexists/' + control.value)
  //                         .toPromise().then((res) => res.json())
  //                         .then((data) => {
  //                             console.log(data)
  //                             if (data.exists === true) {
  //                                 resolve({ "invalid": true })
  //                             }
  //                             else {
  //                                 resolve(null)
  //                             }
  //                         }
  //                         )
  //                 }
  //                     , 1000)
  //             }
  //             else{
  //                 resolve(null)
  //             }
  //         })
  //     return promise;


  // }


}
