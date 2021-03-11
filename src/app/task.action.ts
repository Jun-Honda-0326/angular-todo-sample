import { Task } from '../models/task'

export namespace TaskAction {

  export class GetAll {
    static readonly type = '[Task] GetAll'
  }

  export class Add {
    static readonly type = '[Task] Add'
    constructor(public payload: Task) {}
  }

  export class Update {
    static readonly type = '[Task] Update'
    constructor(public task: Task) {}
  }

  export class Delete {
    static readonly type = '[Task] Delete'
    constructor(public index: number) {}
  }

}
