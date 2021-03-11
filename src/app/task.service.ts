import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = 'api/tasks'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasks)
  }

  addTask(task: Task): Observable<Task> {
    const newTask: Task = {
      title: task.title,
      done: false,
      deadline: task.deadline ? new Date(task.deadline): null
    }
    console.log(this.tasks)
    console.log(newTask)
    return this.http.post<Task>(this.tasks, newTask, this.httpOptions)

  }

  editTask(index: number, task: Task): Observable<Task> {
    const editTask: Task = {
      title: task.title,
      done: false,
      deadline: task.deadline ? new Date(task.deadline): null
    }
    return this.http.put<Task>(this.tasks, editTask, this.httpOptions)
  }

  deleteTask(index: number): Observable<Task> {
    const url = `${this.tasks}/${index}`
    return this.http.delete<Task>(url, this.httpOptions)
  }
}
