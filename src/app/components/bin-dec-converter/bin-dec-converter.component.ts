import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { TEXTS } from '../../../assets/text-constants';

@Component({
  selector: 'app-bin-dec-converter',
  templateUrl: './bin-dec-converter.component.html',
  styleUrls: ['./bin-dec-converter.component.scss']
})
export class BinDecConverterComponent {

  TITLE = TEXTS.BINARY_DECIMAL_CONVERTER.TITLE;
  SUBTITLE = TEXTS.BINARY_DECIMAL_CONVERTER.TITLE;
  BIN_DEC = TEXTS.BINARY_DECIMAL_CONVERTER.BIN_DEC;
  DEC_BIN = TEXTS.BINARY_DECIMAL_CONVERTER.DEC_BIN;

  color: ThemePalette = 'accent';

  option: boolean = false;
  disabled: boolean = false;

  input: string;
  output: string;

  compute() {
    if (this.option) {
      this.output = (Number(this.input) >>> 0).toString(2);
    } else {
      if (!/^[0-1]+$/.test(this.input)) return this.input;
      this.output = parseInt(this.input, 2).toString();
    }
  }

}
