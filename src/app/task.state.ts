import { Observable } from 'rxjs';
import { Injectable } from '@angular/core'
import { State, StateContext, Selector, Action } from '@ngxs/store';
import { Task } from '../models/task';
import { TaskAction } from './task.action';
import { TaskService } from './task.service';
import { tap, finalize } from 'rxjs/operators';
import { coerceStringArray } from '@angular/cdk/coercion';

export class TaskStateModel {
  tasks: Task[]
  selectedTask: Task
}

@State<TaskStateModel>({
  name: 'tasks',
  defaults: {
    tasks: [],
    selectedTask: null
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


  @Action(TaskAction.Delete)
  deleteTask(ctx: StateContext<TaskStateModel>, action: TaskAction.Delete) {
    const index = action.payload
    return this.taskService.deleteTask(index).pipe(
      finalize(() => {
        ctx.dispatch(new TaskAction.GetAll())
      })
    )
  }

  @Action(TaskAction.Update)
  editTask(ctx: StateContext<TaskStateModel>, action: TaskAction.Update) {
    const task = action.payload
    return this.taskService.editTask(task).pipe(
      finalize(() => {
        ctx.patchState({
          selectedTask: task
        })
      })
    )
  }



  @Selector()
  static tasks(state: TaskStateModel) {
    return state.tasks
  }

  @Selector()
  static selectedTask(state: TaskStateModel) {
    return state.selectedTask
  }



}
