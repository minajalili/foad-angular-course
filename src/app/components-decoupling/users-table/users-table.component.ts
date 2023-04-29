import { Component, Input } from '@angular/core';
import { user } from 'src/app/user-iterface';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
})
export class UsersTableComponent {
  @Input() users: user[] = [
    // { email: 'test@email.com', address: 'test Ave', password: '123' },
    // { email: 'test2@email.com', address: 'test2 Ave', password: '12345' },
    // { email: 'test3@email.com', address: 'test3 Ave', password: '1234567' },
  ];
}
