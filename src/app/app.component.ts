import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'practice1-foad-tutorial';
  ratings: number[] = [1.5, 2, 5, 3, 4.5, 2.5];

  public onStarClick(rating: number) {
    window.alert(`the rating ${rating} is clicked!`);
  }
}
