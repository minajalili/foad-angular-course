import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IUser } from './user-interface';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css'],
})
export class StructuralDirectiveComponent implements OnInit {
  private _user: IUser;
  selected: IUser;
  @Input() users: IUser[];
  @Input() set user(user: IUser) {
    this._user = user;
    this.counter++;
  }
  get user(): IUser {
    return this._user;
  }
  counter: number = 0;

  ngOnInit(): void {
    console.log(this._user, this.counter);
  }

  //if you have multi input field use: ngOnChanges
  // ngOnChanges(changes: SimpleChanges): void {
  //   this._user = this.user;
  //   this.counter++;
  // }

  onSelectChange(user: IUser) {
    this.selected = user;
    console.log(user);
  }
}
