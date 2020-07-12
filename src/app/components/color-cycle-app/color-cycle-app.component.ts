import { Component } from '@angular/core';
import { TEXTS } from '../../../assets/text-constants';

@Component({
  selector: 'app-color-cycle-app',
  templateUrl: './color-cycle-app.component.html',
  styleUrls: ['./color-cycle-app.component.scss']
})
export class ColorCycleAppComponent {

  TITLE = TEXTS.COLOR_CYCLE.TITLE;

  colorBlue = '';
  colorRed = '';
  colorGreen = '';

  colorBlueIncrement = '';
  colorRedIncrement = '';
  colorGreenIncrement = '';

  started = false;
  
  startColarization() {
    this.started = !this.started;

    if (this.started) {

    }

    if (!this.started) {
      // TO DO 
    }
  }

}
