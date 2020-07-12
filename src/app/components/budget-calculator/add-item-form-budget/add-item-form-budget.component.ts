import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from '../../../models/budget-item.model';
import { TEXTS } from '../../../../assets/text-constants';

@Component({
  selector: 'app-add-item-form-budget',
  templateUrl: './add-item-form-budget.component.html',
  styleUrls: ['./add-item-form-budget.component.scss']
})
export class AddItemFormBudgetComponent implements OnInit {

  ADD = TEXTS.BUDGET_CALCULATOR.ADD_ITEM.ADD;

  @Input() item: BudgetItem = new BudgetItem('', null);
  
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>()

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
  }
}
