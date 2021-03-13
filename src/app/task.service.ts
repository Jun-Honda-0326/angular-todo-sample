import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { identity, Observable, of } from 'rxjs';
import { Task } from '../models/task';
import { catchError, map, tap } from 'rxjs/operators';

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
      id:    task.id,
      title: task.title,
      done: false,
      deadline: task.deadline ? new Date(task.deadline): null
    }
    return this.http.post<Task>(this.tasks, newTask, this.httpOptions)

  }

  editTask(index: number, task: Task): Observable<Task> {
    const editTask: Task = {
      id:    task.id,
      title: task.title,
      done: false,
      deadline: task.deadline ? new Date(task.deadline): null
    }
    return this.http.put<Task>(this.tasks, editTask, this.httpOptions)
  }

  deleteTask(id: number): Observable<Task> {
    const url = `${this.tasks}/${id}`
    return this.http.delete<Task>(url, this.httpOptions)
  }
}
