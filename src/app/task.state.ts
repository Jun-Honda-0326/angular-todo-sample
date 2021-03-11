import { Observable } from 'rxjs';
import { Injectable } from '@angular/core'
import { State, StateContext, Selector, Action } from '@ngxs/store';
import { Task } from '../models/task';
import { TaskAction } from './task.action';
import { TaskService } from './task.service';
import { tap, finalize } from 'rxjs/operators';

export class TaskStateModel {
  tasks: Task[]
}

@State<TaskStateModel>({
  name: 'tasks',
  defaults: {
    tasks: []
  },
})

@Injectable()
export class TaskState {
  constructor(private taskService: TaskService) {}

  @Action(TaskAction.GetAll)
  getTasks(ctx: StateContext<TaskStateModel>) {
    return this.taskService.getTasks().pipe(
      tap((data) => {
        ctx.patchState({ tasks: data })
      })
    )
  }

  @Action(TaskAction.Add)
  addTask(ctx: StateContext<TaskStateModel>, action: TaskAction.Add) {
    const task = action.payload
    return this.taskService.addTask(task).pipe(
      finalize(() => {
        ctx.dispatch(new TaskAction.GetAll())
      })
    )
  }




}
