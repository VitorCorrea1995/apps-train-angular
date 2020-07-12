import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from '../../../../models/budget-item.model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent {

  @Input() budgetItem: BudgetItem;

  @Output() deleteBudgetEvent: EventEmitter<any> = new EventEmitter<any>()

  deleteBudget() {
    this.deleteBudgetEvent.emit();
  }
}
