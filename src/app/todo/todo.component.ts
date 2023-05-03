import { Component, OnInit } from '@angular/core';
import { ITodo } from '../intefaces/model-interface';
import { Observable, map, filter, shareReplay } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  public http$: Observable<ITodo[]>;
  public doneTasks$: Observable<ITodo[]>;
  public undoneTasks$: Observable<ITodo[]>;

  ngOnInit(): void {
    this.http$ = new Observable((observe) => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then((body) => {
          observe.next(body);
          observe.complete();
        })
        .catch((error) => observe.error(error));
    });

    this.http$ = this.http$.pipe(shareReplay());

    this.doneTasks$ = this.http$.pipe(
      map((todo) => todo.filter((todo) => todo.completed === true))
    );
    this.undoneTasks$ = this.http$.pipe(
      map((todo) => todo.filter((todo) => todo.completed === false))
    );
  }
}
