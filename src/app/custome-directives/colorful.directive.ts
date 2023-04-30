import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorful]',
})
export class ColorfulDirective {
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
  @HostBinding('style.color') color: string;
  @HostBinding('style.border-color') borderColor: string;
  @HostListener('keydown') newColor() {
    const randomColor = Math.floor(Math.random() * this.availableColors.length);
    this.color = this.borderColor = this.availableColors[randomColor];
  }
}
