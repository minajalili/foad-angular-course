import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent {
  isShown: boolean = true;
  users: string[] = ['name1', 'name2', 'name5', 'name8'];
  switchcase: string = 'a';
  usersObj: any = [
    {
      id: 1,
      name: 'name1',
    },
    {
      id: 2,
      name: 'name2',
    },
    {
      id: 3,
      name: 'name3',
    },
    {
      id: 4,
      name: 'name4',
    },
    {
      id: 5,
      name: 'name5',
    },
    {
      id: 6,
      name: 'name6',
    },
    {
      id: 7,
      name: 'name7',
    },
  ];

  addNewUser() {
    this.usersObj = [
      {
        id: 1,
        name: 'name1',
      },
      {
        id: 2,
        name: 'name2',
      },
      {
        id: 9,
        name: 'name9',
      },
      {
        id: 4,
        name: 'name4',
      },
      {
        id: 5,
        name: 'name5',
      },
      {
        id: 6,
        name: 'name6',
      },
      {
        id: 7,
        name: 'name7',
      },
      {
        id: 3,
        name: 'name3',
      },
    ];
  }

  trackByFunc(index: number, el: any) {
    return el.id;
  }
}
