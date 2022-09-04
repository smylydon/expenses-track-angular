import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { LabelsState } from '../+state/labels/labels.reducer';
import { initLabels } from '../+state/labels/labels.actions';
import { getAllLabels } from '../+state/labels/labels.selectors';
import { LabelsEntity } from '../+state/labels/labels.models';

import { Observable } from 'rxjs';

@Component({
  selector: 'nx-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpensesComponent implements OnInit {
  public labels$: Observable<LabelsEntity[]>;

  constructor(private store: Store<LabelsState>) {}

  ngOnInit(): void {
    this.labels$ = this.store.select(getAllLabels);
    this.store.dispatch(initLabels());
  }
}
