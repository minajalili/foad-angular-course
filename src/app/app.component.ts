import { Component } from '@angular/core';
import { IUser } from './structural-directive/user-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'practice1-foad-tutorial';
  // ratings: number[] = [1.5, 2, 5, 3, 4.5, 2.5];

  // public onStarClick(rating: number) {
  //   window.alert(`the rating ${rating} is clicked!`);
  // }
  user: IUser = {
    name: 'mina',
    age: 25,
  };

  users: IUser[] = [
    {
      name: 'name',
      age: 35,
    },
    {
      name: 'name2',
      age: 50,
    },
    {
      name: 'name3',
      age: 42,
    },
    {
      name: 'name4',
      age: 16,
    },
    {
      name: 'name5',
      age: 27,
    },
  ];
}
