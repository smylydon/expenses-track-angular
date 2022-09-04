import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { LabelsEntity } from '../+state/labels/labels.models';

import { deleteTransaction } from '../+state/transactions/transactions.actions';

@Component({
  selector: 'nx-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionComponent {
  @ViewChild('icon') boxicon: ElementRef;
  @Input('transaction') set setTransaction(transaction: LabelsEntity) {
    const color: string = transaction?.color;
    this.color = color ?? '#e5e5e5';
    this.transaction = transaction;
  }

  public transaction: LabelsEntity;
  public color = '#e5e5e5';
  constructor(private store: Store) {}

  remove() {
    this.store.dispatch(deleteTransaction({ id: this.transaction._id }));
  }
}
