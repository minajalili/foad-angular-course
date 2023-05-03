import {
  Directive,
  ElementRef,
  Input,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  availableColors = [
    '#0E26B9',
    '#4D5FD0',
    '#263DCE',
    '#0A1D91',
    '#071571',
    '#FF4900',
    '#FF7B46',
    '#FF5411',
    '#D33C00',
    '#A42F00',
    '#00B96A',
    '#39D08F',
    '#0DCE7B',
    '#009153',
    '#007040',
    '#FFB700',
    '#FFCB46',
    '#FFBC11',
    '#D39700',
    '#A47600',
  ];
  constructor(private elementRef: ElementRef, private rendere: Renderer2) {}

  @Input() highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    const randomColor = Math.floor(Math.random() * this.availableColors.length);
    const color = this.availableColors[randomColor];
    this.onBackgrounColorChange(color, 'white');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.onBackgrounColorChange('transparent', 'var(--bs-primary)');
  }

  onBackgrounColorChange(bgColor: string, color: string) {
    this.rendere.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      bgColor
    );
    this.rendere.setStyle(this.elementRef.nativeElement, 'color', color);
    // this.elementRef.nativeElement.style.backgroundColor = color; wrong way!!
  }
}
