import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { InMemoryDataService } from '../in-memory-data.service'
import { Store, Select } from '@ngxs/store'
import { Observable } from 'rxjs';
import { Task } from '../../models/task';
import { TaskAction } from '../task.action';
import { TaskService } from '../task.service';
import { TaskState } from '../task.state';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Select(TaskState.tasks) tasks$: Observable<Task[]>

  constructor(
    private inMemortDataService: InMemoryDataService,
    private store: Store
    ) { }


  task = {
    id:    null,
    title: '',
    deadline: null,
  };

  ngOnInit(): void {
    this.getTasks()
  }

  getTasks(): void {
    this.store.dispatch(new TaskAction.GetAll())
  }

  addTask(task: Task): void {
    this.store.dispatch(new TaskAction.Add((task)))
  }

}
