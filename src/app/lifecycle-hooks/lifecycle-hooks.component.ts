import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css'],
}) // in every single changes this methods will be called!
export class LifecycleHooksComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @ViewChild('par', { static: true }) par: ElementRef;
  @ViewChild('par2', { static: true }) par2: ElementRef;
  @Input() var1;
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges: ', this.par.nativeElement.textContent);
  }
  ngOnInit(): void {
    console.log('ngOnInit: ', this.par.nativeElement.textContent);
  }
  ngDoCheck(): void {
    console.log('ngDoCheck Was Called!');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit: ', this.par.nativeElement.textContent);
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked: ', this.par.nativeElement.textContent);
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: ', this.par.nativeElement.textContent);
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked: ', this.par.nativeElement.textContent);
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy: ', this.par.nativeElement.textContent);
  }

  onChangeViewChild() {
    this.par.nativeElement.textContent = 'hi hi!!'; //never do like this! becouase of xss attacks! last result
  }
}
