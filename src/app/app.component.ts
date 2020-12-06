import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks = [
    {title: '牛乳を買う', done: false},
    {title: '可燃ごみを出す', done: true},
    {title: '銀行に行く', done: false},
  ];

  newTask = {
    title: '',
    deadline: new Date(),
  };

  addTask(){
    this.tasks.push({title: this.newTask.title, done: false, deadline: new Date(this.newTask.deadline)})
    this.newTask = {
      title: '',
      deadline: new Date(),
    };
  }
}
