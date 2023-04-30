import { Component } from '@angular/core';

@Component({
  selector: 'app-custome-directives',
  templateUrl: './custome-directives.component.html',
  styleUrls: ['./custome-directives.component.css'],
})
export class CustomeDirectivesComponent {
  images: string[] = [
    './assets/dodge.png',
    './assets/dodge2.png',
    './assets/dodge3.png',
  ];
}
