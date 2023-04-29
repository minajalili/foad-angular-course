import { Component } from '@angular/core';
import { user } from '../user-iterface';

@Component({
  selector: 'app-components-decoupling',
  templateUrl: './components-decoupling.component.html',
  styleUrls: ['./components-decoupling.component.css'],
})
export class ComponentsDecouplingComponent {
  users: user[] = [];
  onClick(users: user[]) {
    this.users = users;
  }
}
