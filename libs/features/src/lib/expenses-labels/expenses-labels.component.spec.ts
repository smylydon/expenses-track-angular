import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesLabelsComponent } from './expenses-labels.component';

describe('ExpensesLabelsComponent', () => {
  let component: ExpensesLabelsComponent;
  let fixture: ComponentFixture<ExpensesLabelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpensesLabelsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpensesLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
