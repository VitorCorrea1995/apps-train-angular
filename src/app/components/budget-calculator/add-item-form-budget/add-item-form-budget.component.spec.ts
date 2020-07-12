import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemFormBudgetComponent } from './add-item-form-budget.component';

describe('AddItemFormBudgetComponent', () => {
  let component: AddItemFormBudgetComponent;
  let fixture: ComponentFixture<AddItemFormBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItemFormBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemFormBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
