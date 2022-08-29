import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';

import { LabelsState } from '../+state/labels/labels.reducer';
import { initLabels } from '../+state/labels/labels.actions';
import {
  addTransaction,
  initTransactions,
} from '../+state/transactions/transactions.actions';
import { TransactionsEntity } from '../+state/transactions/transactions.models';

@Component({
  selector: 'nx-expenses-form',
  templateUrl: './expenses-form.component.html',
  styleUrls: ['./expenses-form.component.scss'],
})
export class ExpensesFormComponent implements OnInit {
  public expensesForm!: FormGroup; // eslint-disable-line

  public name: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  public type: FormControl = new FormControl('Investment', [
    Validators.required,
    Validators.pattern(/(Investment|Expense|Savings)/),
  ]);
  public amount: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/\d+/),
  ]);

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<LabelsState>
  ) {}

  ngOnInit(): void {
    this.expensesForm = this.formBuilder.group({
      name: this.name,
      type: this.type,
      amount: this.amount,
    });

    this.store.dispatch(initLabels());
  }

  submit() {
    const transaction: TransactionsEntity = this.expensesForm
      .value as TransactionsEntity;

    this.store.dispatch(addTransaction({ model: transaction }));
  }
}
