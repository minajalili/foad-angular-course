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
  constructor(private elementRef: ElementRef, private rendere: Renderer2) {}

  @Input() highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.onBackgrounColorChange('green');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.onBackgrounColorChange('transparent');
  }

  onBackgrounColorChange(color: string) {
    this.rendere.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      color
    );
    // this.elementRef.nativeElement.style.backgroundColor = color; wrong way!!
  }
}
