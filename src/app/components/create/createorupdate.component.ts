import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-create',
  templateUrl: './createorupdate.component.html',
  styleUrls: ['./createorupdate.component.css']
})
export class CreateOrUpdateComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private taskservice: TaskService) { }
  taskFormGroup: FormGroup;
  isLoading: boolean;
  isUpdatePage: boolean = false;
  tasktoedit;
  ngOnInit() {
    this.taskFormGroup = new FormGroup({
      'title': new FormControl(null, [Validators.required,Validators.maxLength(20)]),
      'duration': new FormControl(1),
      'status': new FormControl('New'),
      'description': new FormControl(null, [Validators.required]),
    });
    this.route.params.subscribe((params) => {
      if (params.id != null) {
        this.isUpdatePage = true;
        this.tasktoedit = this.taskservice.getTaskById(params.id);
        this.taskFormGroup.setValue({
          'title': this.tasktoedit.title,
          'duration': this.tasktoedit.duration,
          'status': this.tasktoedit.status,
          'description': this.tasktoedit.description,
        });


      }
    });

  }
  hasError(controlName: string, errorName: string) {
    return this.taskFormGroup.controls[controlName].hasError(errorName);
  }
  saveTask() {
    this.isLoading = true;
    console.log('form values :',this.taskFormGroup.value);
    if (this.isUpdatePage) {
      let task={id:this.tasktoedit.id,...this.taskFormGroup.value,createdat:new Date(this.tasktoedit.createdat).getTime().toString()}
      this.taskservice.updateTask(this.tasktoedit.id, task).then((response) => {
        this.isLoading = false;
        console.log('upadated task', response);
        this.router.navigate(["home"]);
      });
    } else {
      
      let task={...this.taskFormGroup.value,createdat:new Date().getTime().toString()}
      this.taskservice.saveTask(task).then((response) => {
        this.isLoading = false;
        console.log('created task', response);

        this.router.navigate(["home"]);

      })
    }

  }

}
