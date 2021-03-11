import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from 'src/models/task';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks: Task[] = [
      { title: '銀行に行く',   done: false, deadline: new Date('2020-01-03') },
      { title: '買い物行く', done: false, deadline: new Date('2021-04-03') }
    ]
  return { tasks }
  }

}
