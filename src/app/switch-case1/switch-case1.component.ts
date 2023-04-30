import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-switch-case1',
  templateUrl: './switch-case1.component.html',
  styleUrls: ['./switch-case1.component.css'],
})
export class SwitchCase1Component implements OnInit {
  constructor(private loggingService: LoggingService) {}

  ngOnInit(): void {
    this.loggingService.log('Hi From App-switch-case1');
  }

  public log() {
    this.loggingService.log('Hi From App-switch-case1');
  }
}
