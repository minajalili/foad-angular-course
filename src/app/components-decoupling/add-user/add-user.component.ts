import { Component, EventEmitter, Input, Output } from '@angular/core';
import { user } from 'src/app/user-iterface';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  @Output() onsubmitUser = new EventEmitter<user>();

  onSubmit(email: string, address: string, password: string, e: Event) {
    e.preventDefault();
    const user: user = {
      email: email,
      address: address,
      password: password,
    };
    if (email && address && password) {
      this.onsubmitUser.emit(user);
    }
  }
}
