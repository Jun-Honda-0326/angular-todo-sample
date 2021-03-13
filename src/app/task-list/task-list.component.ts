import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store'
import { Observable } from 'rxjs';
import { Task } from '../../models/task';
import { TaskAction } from '../task.action';
import { TaskState } from '../task.state';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Select(TaskState.tasks) tasks$: Observable<Task[]>

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.getTasks()
  }

  getTasks(): void {
    this.store.dispatch(new TaskAction.GetAll())
  }

}
