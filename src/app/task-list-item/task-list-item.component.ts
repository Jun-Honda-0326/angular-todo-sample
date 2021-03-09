import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})

export class TaskListItemComponent implements OnInit {
  show: boolean = false

  constructor(private taskService: TaskService) { }

  @Input() task: Task;
  @Input() index: number;

  ngOnInit(): void { }

  editTask(index: number, task: Task): void {
    this.taskService.editTask(index, task)
  }

  deleteTask(index: number):void {
    this.taskService.deleteTask(index)
  }

  isOverdue(task: Task): boolean {
    return !task.done && task.deadline && task.deadline.getTime() < (new Date()).setHours(0, 0, 0, 0);
  }

  active(): void {
    this.show = !this.show
  }



}
