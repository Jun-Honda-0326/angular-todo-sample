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
    this.tasks.push(task)
    console.log(this.tasks)
  }
}
