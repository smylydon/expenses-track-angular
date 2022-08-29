import { Component, Input, OnInit } from '@angular/core';
import { LabelsEntity } from '../+state/labels/labels.models';

@Component({
  selector: 'nx-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent implements OnInit {
  @Input() transaction: LabelsEntity;

  constructor() {}

  ngOnInit(): void {}

  remove() {}
}
