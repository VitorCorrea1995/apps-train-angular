import { Component, OnInit } from '@angular/core';
import { TEXTS } from '../../../assets/text-constants';
@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent  {
  
  TITLE = TEXTS.COUNTDOWN_TIMER.TITLE;

  eventName = '';
  eventDate;
  eventTime;
  started: boolean = false;


  startColarization() {
    
  }

}
