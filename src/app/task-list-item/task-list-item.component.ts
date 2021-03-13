import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Store, Select } from '@ngxs/store'
import { Task } from '../../models/task';
import { TaskAction } from '../task.action';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})

export class TaskListItemComponent implements OnInit {
  show: boolean = false

  constructor(
    private taskService: TaskService,
    private store: Store
    ) { }

  @Input() task: Task;
  @Input() index: number;

  ngOnInit(): void { }

  editTask(index: number, task: Task): void {
    this.taskService.editTask(index, task)
  }

  deleteTask(id: number):void {
    this.store.dispatch(new TaskAction.Delete(id))
  }

  isOverdue(task: Task): boolean {
    return !task.done && task.deadline < new Date()
  }

  active(): void {
    this.show = !this.show
  }



}
