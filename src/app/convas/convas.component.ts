import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Renderer2,
} from '@angular/core';
import { fromEvent, map, take, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'app-convas',
  template: `<canvas #myCanvas width="1000" height="600"></canvas>`,
})
export class ConvasComponent implements AfterViewInit {
  @ViewChild('myCanvas', { static: false }) myCanvas: ElementRef;
  constructor(private renderer: Renderer2) {}
  context: CanvasRenderingContext2D;
  x: number = 0;
  y: number = 0;

  ngAfterViewInit(): void {
    this.renderer.setStyle(
      this.myCanvas.nativeElement,
      'backgroundColor',
      'black'
    );

    fromEvent(this.myCanvas.nativeElement, 'click')
      .pipe(
        map((event) => event as MouseEvent),

        map((item) => {
          return {
            x: item.offsetX,
            y: item.offsetY,
          };
        })
        // take(2), stop map on step 2
        // takeWhile((item) => item.x < 800) stop when x>800
        // tap((i) => console.log(i)) logsystem
      )
      .subscribe((item) => {
        this.drawLine(item.x, item.y);
      });
  }
  drawLine(x: number, y: number) {
    this.context = this.myCanvas.nativeElement.getContext('2d');
    this.context.beginPath();
    this.context.strokeStyle = this.randomColor();
    this.context.lineWidth = 3;
    this.context.moveTo(this.x, this.y);
    this.context.lineTo(x, y);
    this.context.stroke();
    this.x = x;
    this.y = y;
  }
  randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
