import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  Input,
  OnInit,
} from '@angular/core';
import { ICarousel } from './app-interface';

@Directive({
  selector: '[appCarousel]',
})
export class CarouselDirective implements OnInit {
  context: ICarousel | null = null;
  index: number = 0;
  timer;
  constructor(
    private tempalteRef: TemplateRef<ICarousel>,
    private viewContainerRef: ViewContainerRef
  ) {}

  @Input('appCarouselFrom') images: string[];
  @Input('appCarouselAutoplay')
  set autoplay(val: string) {
    val === 'yes' ? this.autoPlay() : this.clearAutoPlay();
  }

  ngOnInit(): void {
    this.context = {
      $implicit: this.images[0],
      controller: {
        next: () => this.next(),
        prev: () => this.prev(),
      },
    };

    this.viewContainerRef.createEmbeddedView(this.tempalteRef, this.context);
  }

  public next() {
    this.index++;

    if (this.index >= this.images.length) {
      this.index = 0;
    }
    this.context.$implicit = this.images[this.index];
    // console.log('next', this.index, this.images[this.index]);
  }

  public prev() {
    this.index--;
    if (this.index < 0) {
      this.index = this.images.length - 1;
    }
    this.context.$implicit = this.images[this.index];
    // console.log('prev', this.index);
  }
  public autoPlay() {
    this.timer = setInterval(() => {
      this.next();
    }, 1700);
  }

  public clearAutoPlay() {
    clearInterval(this.timer);
  }
}
