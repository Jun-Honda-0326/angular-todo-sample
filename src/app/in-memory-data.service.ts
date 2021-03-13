import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from 'src/models/task';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks: Task[] = [
      { id: 1, title: '銀行に行く',   done: false, deadline: new Date('2020-01-03') },
      { id: 2, title: '買い物行く',   done: false, deadline: new Date('2021-04-03') },
      { id: 3, title: '旅行に行く',   done: false, deadline:  new Date('2021-05-05') }
    ]
  return { tasks }
  }

  // genId(tasks: Task[]): string {
  //   return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1
  // }

}
