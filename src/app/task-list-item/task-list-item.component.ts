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

  //親コンポネントへidを渡す
  deleteTask(index) {
    this.deleteId.emit(index)
  }




  subimit(index: number, task: Task): void {
    let editTask = {
      index: index,
      task: task
    }
    this.edit.emit({
      index: editTask.index,
      task: {
        title: editTask.task.title,
        done:  editTask.task.done,
        deadline: new Date(editTask.task.deadline)
      }
    });
    editTask = {
      index: index,
      task: task
    };
  }



  ngOnInit(): void { }

  isOverdue(task: Task): boolean {
    return !task.done && task.deadline &&  task.deadline.getTime() < (new Date()).setHours(0, 0, 0, 0);
  }

  active(): void {
    this.show = !this.show
  }









}
