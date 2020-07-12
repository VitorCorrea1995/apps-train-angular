import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSimpleNotesComponent } from './main-simple-notes.component';

describe('MainSimpleNotesComponent', () => {
  let component: MainSimpleNotesComponent;
  let fixture: ComponentFixture<MainSimpleNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSimpleNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSimpleNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
