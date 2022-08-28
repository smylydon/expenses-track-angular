import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesGraphComponent } from './expenses-graph.component';

describe('ExpensesGraphComponent', () => {
  let component: ExpensesGraphComponent;
  let fixture: ComponentFixture<ExpensesGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpensesGraphComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpensesGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
