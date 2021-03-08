import { Component, OnInit } from '@angular/core';
import { EditTask, Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() { }
  tasks: Task[] = [
    { title: '銀行に行く', done: false, deadline: new Date('2020-01-03') }
  ]

  ngOnInit(): void {
  }

  addTask(task: Task):void{
    this.tasks.push(task);
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1)
  }

  editTask(editTask: EditTask): void {
     editTask.task.deadline.getTime() < (new Date()).setHours(0, 0, 0, 0)
    this.tasks.splice(editTask.index, 1, editTask.task)
    console.log(editTask)
    console.log(this.tasks)
  }


}
