import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionComponent } from './transaction.component';

describe('TransactionComponent', () => {
  let component: TransactionComponent;
  let fixture: ComponentFixture<TransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display border as #e5e5e5', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('box-icon')?.getAttribute('color')).toBe(
      'e5e5e5x'
    );
  });
});
