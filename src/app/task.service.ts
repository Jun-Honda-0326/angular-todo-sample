import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [
    { title: '銀行に行く', done: false, deadline: new Date('2020-01-03') }
  ]

  constructor() { }

  getTasks(): Observable<Task[]> {
    const tasks = of(this.tasks)
    return tasks
  }

  addTask(task: Task):void  {
    const newTask: Task = {
      title: task.title,
      done: false,
      deadline: task.deadline ? new Date(task.deadline): null
    }
    this.tasks.push(newTask)
  }

  editTask(index: number, task: Task): void {
    const editTask: Task = {
      title: task.title,
      done: false,
      deadline: task.deadline ? new Date(task.deadline): null
    }
    this.tasks.splice(index, 1, editTask)
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1)
  }
}
