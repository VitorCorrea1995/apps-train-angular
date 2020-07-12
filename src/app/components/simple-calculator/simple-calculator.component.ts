import { Component } from '@angular/core';
import { TEXTS } from '../../../assets/text-constants';
@Component({
  selector: 'app-simple-calculator',
  templateUrl: './simple-calculator.component.html',
  styleUrls: ['./simple-calculator.component.scss']
})
export class SimpleCalculatorComponent {
  
  TITLE = TEXTS.SIMPLE_CALCULATOR.TITLE;
  AC = TEXTS.SIMPLE_CALCULATOR.AC;
  
  CONTROLS_INPUT_ORDER = ['7','8','9','+','4','5','6','-','1','2','3','*','0','.','=','/'];

  display: string = '';

  handleNewDigit(digit) {
    if (digit === '=') {
      this.display = eval(this.display) ?  eval(this.display) : '';
    } else {
      this.display = this.display + digit;
    }
  }

}
