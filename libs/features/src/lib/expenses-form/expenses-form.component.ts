import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validator,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'nx-expenses-form',
  templateUrl: './expenses-form.component.html',
  styleUrls: ['./expenses-form.component.scss'],
})
export class ExpensesFormComponent implements OnInit {
  public expensesForm!: FormGroup; // eslint-disable-line

  public name: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  public type: FormControl = new FormControl('Investment', [
    Validators.required,
    Validators.pattern(/(Investment|Expense|Savings)/),
  ]);
  public amount: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/\d+/),
  ]);
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.expensesForm = this.formBuilder.group({
      name: this.name,
      type: this.type,
      amount: this.amount,
    });
  }

  submit() {
    this.expensesForm.invalid;
    console.log('hello::', this.expensesForm.value);
  }
}
