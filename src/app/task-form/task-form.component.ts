import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  tasks: Task[]

  constructor(private taskService: TaskService) { }

  task = {
    title: '',
    deadline: null,
  };


  ngOnInit(): void { }

  addTask(task: Task): void {
    this.taskService.addTask(task).subscribe(task =>  {
      this.tasks.push(task)
    })
  }

}
