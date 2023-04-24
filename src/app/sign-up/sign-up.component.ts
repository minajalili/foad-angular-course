import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  name: String = '';
  password: string = '';
  repeatpass: string = '';
  validation: boolean = false;

  onNameChanged(e: Event) {
    this.name = (<HTMLTextAreaElement>e.target).value;
  }

  onPasswordChanged(e: Event) {
    this.password = (<HTMLTextAreaElement>e.target).value;
  }

  onRetypeChanged(e: Event) {
    this.repeatpass = (<HTMLTextAreaElement>e.target).value;
    this.validation = this.password === this.repeatpass ? true : false;
  }
}
