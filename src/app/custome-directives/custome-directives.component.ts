import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-custome-directives',
  templateUrl: './custome-directives.component.html',
  styleUrls: ['./custome-directives.component.css'],
})
export class CustomeDirectivesComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  images: string[] = [
    './assets/dodge.png',
    './assets/dodge2.png',
    './assets/dodge3.png',
  ];
  userName: string;

  ngOnInit(): void {
    this.userName = this.route.snapshot.params['userName'];
    this.route.params.subscribe((params: Params) => {
      this.userName = params['userName'];
    });
  }
}
