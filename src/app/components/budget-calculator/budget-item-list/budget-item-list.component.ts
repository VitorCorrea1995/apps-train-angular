import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from '../../../models/budget-item.model';
import { TEXTS } from '../../../../assets/text-constants';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent {

  EXPENSES = TEXTS.BUDGET_CALCULATOR.BUDGET_ITEM_LIST.EXPENSE;
  INCOMES = TEXTS.BUDGET_CALCULATOR.BUDGET_ITEM_LIST.INCOME;

  @Input() budgetItems: BudgetItem[];

  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();


  deleteBudget(budgetItem) {
    this.delete.emit(budgetItem);
  }

}
