import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Store, Select } from '@ngxs/store'
import { Observable } from 'rxjs';
import { Task } from '../../models/task';
import { TaskAction } from '../task.action';
import { TaskService } from '../task.service';
import { TaskState } from '../task.state';
import * as moment from 'moment'

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})

export class TaskListItemComponent implements OnInit {
  @Select(TaskState.selectedTask) task$: Observable<Task>
  show: boolean = false

  constructor(
    private store: Store
    ) {}

  @Input() task: Task;

  ngOnInit(): void {
    const day = moment(this.task.deadline).format('YYYY-MM-DD')
    this.task.deadline = new Date(day)
  }

  editTask(task: Task): void {
    this.store.dispatch(new TaskAction.Update(task))

  }

  deleteTask(id: number):void {
    this.store.dispatch(new TaskAction.Delete(id))
  }

  isOverdue(task: Task): boolean {
    if (task.deadline) {
      return !task.done && task.deadline < new Date()
    }
  }

  active(): void {
    this.show = !this.show
  }



}
