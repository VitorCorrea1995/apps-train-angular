import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageBudgetComponent } from './main-page-budget.component';

describe('MainPageBudgetComponent', () => {
  let component: MainPageBudgetComponent;
  let fixture: ComponentFixture<MainPageBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
