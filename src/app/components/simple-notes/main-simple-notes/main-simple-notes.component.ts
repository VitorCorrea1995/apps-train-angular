import { Component, OnInit } from '@angular/core';
import { TEXTS } from '../../../../assets/text-constants';

@Component({
  selector: 'app-main-simple-notes',
  templateUrl: './main-simple-notes.component.html',
  styleUrls: ['./main-simple-notes.component.scss']
})
export class MainSimpleNotesComponent implements OnInit {

  TITLE = TEXTS.SIMPLE_NOTES.TITLE;

  constructor() { }

  ngOnInit(): void {
  }

}
