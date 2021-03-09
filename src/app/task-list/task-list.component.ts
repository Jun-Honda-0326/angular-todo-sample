import { Component, OnInit } from '@angular/core';
import { EditTask, Task } from '../../models/task';
import { TaskService } from '../task.service'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[]

  constructor(private taskService: TaskService) { }


  ngOnInit(): void {
    this.getTasks()
  }

  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks)
  }

  addTask(task: Task):void{
    this.taskService.addTask(task)
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
