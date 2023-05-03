import { Component, Input } from '@angular/core';
import { user } from 'src/app/intefaces/user-iterface';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
})
export class UsersTableComponent {
  @Input() users: user[];
  editToggle: boolean = false;

  onEditRow(user: user) {
    this.editToggle = true;
  }

  onDeleteRow(user: user) {
    console.log(user);
    const index = this.users.indexOf(user);
    this.users.splice(index, 1);
  }
}
