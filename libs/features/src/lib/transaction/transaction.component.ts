import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { LabelsEntity } from '../+state/labels/labels.models';

import { deleteTransaction } from '../+state/transactions/transactions.actions';

@Component({
  selector: 'nx-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent implements OnChanges {
  @ViewChild('icon') boxicon: ElementRef;
  @Input() transaction: LabelsEntity;
  public color = '#e5e5e5';
  constructor(private store: Store) {}

  ngOnChanges(changes: SimpleChanges): void {
    const simpleChange: SimpleChange = changes['transaction'];
    const transaction: LabelsEntity = simpleChange.currentValue as LabelsEntity;
    const color: string = transaction?.color;
    this.color = color ?? '#e5e5e5';
  }

  remove() {
    this.store.dispatch(deleteTransaction({ id: this.transaction._id }));
  }
}
