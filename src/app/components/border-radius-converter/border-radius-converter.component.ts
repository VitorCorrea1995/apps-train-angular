import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Point, DragRef, CdkDragStart, CdkDragMove, CdkDragEnd } from '@angular/cdk/drag-drop';
import { TEXTS } from '../../../assets/text-constants';

@Component({
  selector: 'app-border-radius-converter',
  templateUrl: './border-radius-converter.component.html',
  styleUrls: ['./border-radius-converter.component.scss']
})
export class BorderRadiusConverterComponent {

  TITLE = TEXTS.BORDER_RADIUS_CONVERTER.TITLE;

  @ViewChild('controlledElement') controlledElement: ElementRef;

  /**
   * border-top-left-radius	Defines the shape of the border of the top-left corner
      border-top-right-radius	Defines the shape of the border of the top-right corner
      border-bottom-right-radius	Defines the shape of the border of the bottom-right corner
      border-bottom-left-radius
   */
  x_initial = 340;
  x_final = 1200;
  
  y_initial = 50;
  y_final = 900;

  horizontalRightBorderHandler(event: CdkDragEnd) {
    console.log(event);
    console.log(this.controlledElement);
    this.controlledElement.nativeElement.style.cssText = `border-top-right-radius: ${event.distance.x/800}px`;
    this.controlledElement.nativeElement.style.border = '2px solid blue';
  }

  horizontalLeftBorderHandler(event: CdkDragEnd) {
    console.log(event);
    console.log(this.controlledElement);
    this.controlledElement.nativeElement.style.cssText = `border-top-left-radius: ${event.distance.x/800}px`;
    this.controlledElement.nativeElement.style.border = '2px solid blue';
  }

  verticalRightBorderHandler(event: CdkDragEnd) {
    console.log(event);
    console.log(this.controlledElement);
    this.controlledElement.nativeElement.style.cssText = `border-bottom-right-radius: ${event.distance.y/850}px`;
    this.controlledElement.nativeElement.style.border = '2px solid blue';
  }
 
  verticalLeftBorderHandler(event: CdkDragEnd) {
    console.log(event);
    console.log(this.controlledElement);
    this.controlledElement.nativeElement.style.cssText = `border-bottom-left-radius: ${event.distance.y/850}px`;
    this.controlledElement.nativeElement.style.border = '2px solid blue';
  }

}
