import {Component, OnInit} from '@angular/core';
import {Task} from 'src/app/models/Task';
import {Router} from '@angular/router';
import {TaskService} from 'src/app/services/task.service';
import {ModalComponent} from '../modal/modal.component';
import * as moment from 'moment';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string;
  isLoading: boolean;
  data: Task[];
  displayedColumns: string[] = ['title', 'duration', 'controls'];
  dataSource: Task[] = [];
  selectedTask: Task;
  selectedCollapse = -1;
  selectedFromDate;
  selectedToDate;
  fromStartDate;
  todate;
  Today = new Date();
  FromMinDate = new Date('1/1/2020');

  constructor(public dialog: MatDialog, private router: Router, private taskservice: TaskService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.taskservice.getAllTasks().then((tasks) => {

      console.log('tasks :', tasks);

      this.isLoading = false;
      this.data = tasks;
      this.dataSource = this.data;

    });

  }

  collapse(index): void {
    if (this.selectedCollapse === index) {
      this.selectedCollapse = -1;
    } else {
      this.selectedCollapse = index;
    }
  }

  opendeleteTaskDialog(id): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: {id: id, delete: 1, notdelete: 2}

    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.isLoading = true;
        this.taskservice.deleteTask(id).then((response) => {
          console.log(response);
          this.taskservice.getAllTasks().then((tasks: Task[]) => {
            console.log(tasks);

            this.isLoading = false;
            this.data = tasks;
            this.dataSource = this.data;

          });
        });
        // this.isLoading=false;
      }
    });
  }

  getCollapseClass(): any {
    return this.selectedCollapse;

  }

  onchange(event): any {
    this.dataSource = this.data.filter((element: Task) => {
      return element.title.indexOf(this.title) !== -1;
    });
    console.log(this.dataSource);
  }

  onChangeFromDate(event): any {
    this.selectedFromDate = event;
    console.log(event);

  }

  onChangeToDate(event): any {
    this.selectedToDate = event;
    console.log(event);
    this.dataSource = this.dataSource.filter((task) => {
      return moment(new Date(task.createdat)).isSameOrAfter(this.selectedFromDate, 'hours') && moment(new Date(task.createdat)).isSameOrBefore(this.selectedToDate, 'hours');
    });

  }


  create(): any {
    this.router.navigate(['create']);
  }

  editTask(id): any {
    console.log(id);
    this.router.navigate(['edit', {id}]);

  }

}
