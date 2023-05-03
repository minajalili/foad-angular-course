import { Component, Input, OnInit } from '@angular/core';
import { user } from '../intefaces/user-iterface';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-components-decoupling',
  templateUrl: './components-decoupling.component.html',
  styleUrls: ['./components-decoupling.component.css'],
})
export class ComponentsDecouplingComponent implements OnInit {
  users: user[] = [];
  // @Input() users: user[]
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.users = this.userService.user;
  }

  onClick(user: user) {
    this.users.push(user);
  }
}
