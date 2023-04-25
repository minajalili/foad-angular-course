import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnInit {
  //if you wanna use another value just do like this  @Input('starRating') rating: number = 3.5;
  @Input() rating: number = 3.5;
  @Output() starClick = new EventEmitter<number>();
  width: number = 82;

  ngOnInit(): void {
    this.width = (this.rating * 82) / 5;
  }

  public onClick() {
    this.starClick.emit(this.rating);
  }
}
