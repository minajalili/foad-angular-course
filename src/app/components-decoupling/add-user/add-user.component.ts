import { Component, EventEmitter, Input, Output } from '@angular/core';
import { user } from 'src/app/user-iterface';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  @Input() users: user[] = [
    { email: 'test@email.com', address: 'test Ave', password: '123' },
    { email: 'test2@email.com', address: 'test2 Ave', password: '12345' },
    { email: 'test3@email.com', address: 'test3 Ave', password: '1234567' },
  ];

  @Output() onsubmitUser = new EventEmitter<user[]>();

  onSubmit(email: string, address: string, password: string, e: Event) {
    e.preventDefault();
    const user: user = {
      email: email,
      address: address,
      password: password,
    };
    this.users.push(user);
    this.onsubmitUser.emit(this.users);
  }
}
