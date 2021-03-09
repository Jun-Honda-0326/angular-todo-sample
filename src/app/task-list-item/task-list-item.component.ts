import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { formatWithOptions } from 'util';
import { Task } from '../../models/task';
import { EditTask } from '../../models/task';



@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})

export class TaskListItemComponent implements OnInit {
  show: boolean = false

  constructor() { }

  @Input() task: Task;
  @Input() index: number;

  @Output() deleteId = new EventEmitter<number>()
  @Output() edit= new EventEmitter<EditTask>()

  deleteTask(index: number) {
    this.deleteId.emit(index)
  }

  subimit(index: number, task: Task): void {
    this.edit.emit({
      index: index,
      task: {
        title: task.title,
        done:  task.done,
        deadline: new Date(task.deadline)
      }
    });
  }

  ngOnInit(): void { }

  isOverdue(task: Task): boolean {
    return !task.done && task.deadline &&  task.deadline.getTime() < (new Date()).setHours(0, 0, 0, 0);
  }

  active(): void {
    this.show = !this.show
  }


}
