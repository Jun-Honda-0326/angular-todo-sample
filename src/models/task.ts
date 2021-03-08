export interface Task{
  title: string;
  done: boolean;
  deadline?: Date;
}

export class EditTask {
  index: number
  task: Task
}
