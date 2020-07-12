import { Component } from '@angular/core';
import { BudgetItem } from '../../../models/budget-item.model';
import { TEXTS } from '../../../../assets/text-constants';

@Component({
  selector: 'app-main-page-budget',
  templateUrl: './main-page-budget.component.html',
  styleUrls: ['./main-page-budget.component.scss']
})
export class MainPageBudgetComponent  {

  TITLE = TEXTS.BUDGET_CALCULATOR.MAIN.TITLE;

  totalAmountsOfBudgets = 0;
  budgetItems: BudgetItem[] = new Array<BudgetItem>();

  addNewItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem);
    this.computeTotalAmount();
  }

  handleDeleteBudget(budgetItemToBeDeleted: BudgetItem) {
    this.budgetItems.splice(this.budgetItems.indexOf(budgetItemToBeDeleted), 1);
    this.computeTotalAmount();
  }

  computeTotalAmount() {
    this.totalAmountsOfBudgets = this.budgetItems.reduce((acc , curr) => acc + curr.amount, 0);
  }

}
