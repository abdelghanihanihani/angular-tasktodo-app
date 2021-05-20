import { Injectable } from '@angular/core';
import { Task } from '../models/Task';
import { AngularFirestore } from '@angular/fire/firestore';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [];
  constructor(private firestore: AngularFirestore) { }

  getAllTasks() {
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection('/task').snapshotChanges()
        .subscribe(data => {
          this.tasks = data.map(e => {
            let task: any = e.payload.doc.data();
            let id: any = e.payload.doc.id;
            
            return {
              id: id,
              title: task.title,
              duration: task.duration,
              status: task.status,
              description: task.description,
              createdat:moment(parseInt(task.createdat)).toString()
            } as Task;
          })
          resolve(this.tasks);
        });
    });
    // return new Promise(function (resolve, reject) {
    //   setTimeout(function () {
    //     resolve(JSON.parse(localStorage.getItem('tasks')));
    //   }, 1000);
    // });
  }
  saveTask(task: Task) {
    return this.firestore.collection('task').add(task);
    // return new Promise(function (resolve, reject) {
    //   setTimeout(function () {
    //     this.tasks = JSON.parse(localStorage.getItem('tasks'));
    //     if (this.tasks == null) {
    //       this.tasks = [];
    //     }
    //     this.tasks.push(task);
    //     localStorage.setItem('tasks', JSON.stringify(this.tasks));
    //     resolve(task);
    //   }, 1000);
    // });
  }
  updateTask(id, newTask) {
    return this.firestore.collection('task').doc(id).set(newTask);
    // return new Promise(function (resolve, reject) {
    //   setTimeout(function () {
    //     this.tasks = JSON.parse(localStorage.getItem('tasks'));

    //     let taskIndex = this.tasks.findIndex((task) => {
    //       return task.id == newtask.id;
    //     });
    //     this.tasks[taskIndex] = newtask;
    //     localStorage.setItem('tasks', JSON.stringify(this.tasks));
    //     resolve(newtask);
    //   }, 1000);
    // });
  }
  deleteTask(id) {
    return this.firestore.collection('task').doc(id).delete();

    // return new Promise(function (resolve, reject) {
    //   setTimeout(function () {
    //     this.tasks = JSON.parse(localStorage.getItem('tasks'));

    //     this.tasks = this.tasks.filter((task) => {
    //       return task.id != id;
    //     });
    //     localStorage.setItem('tasks', JSON.stringify(this.tasks));
    //     resolve('done');
    //   }, 1000);
    // });
  }

  getTaskById(id) {
    return this.tasks.find(task => task.id == id);
    // return new Promise<any>((resolve, reject) => {
    //   this.firestore.collection('/task').snapshotChanges()
    //     .subscribe(data => {
    //        taskdata = data.filter(e => {
    //         let taskid: any = e.payload.doc.id;
    //         return id == taskid;
    //       })
    //       let task=taskdata[0].payload.doc;
    //       resolve({
    //         id: task.id,
    //         title: task.title,
    //         duration: task.duration,
    //         status: task.status,
    //         description: task.description,
    //         createdat: new Date(task.createdat.seconds * 1000).toString()
    //       } );
    //     });
    // });
  }

  // return new Promise(function (resolve, reject) {
  //   setTimeout(function () {
  //     this.tasks = JSON.parse(localStorage.getItem('tasks'));
  //     let task = this.tasks.find((task) => {

  //       return task.id == id;
  //     })
  //     resolve(task);
  //   }, 1000);
  // });
}

