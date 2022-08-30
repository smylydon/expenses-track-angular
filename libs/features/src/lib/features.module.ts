import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ExpensesComponent } from './expenses/expenses.component';
import { FeaturesRoutingModule } from './features.routing.module';
import { ListComponent } from './list/list.component';
import { ExpensesGraphComponent } from './expenses-graph/expenses-graph.component';
import { ExpensesLabelsComponent } from './expenses-labels/expenses-labels.component';
import { ExpensesFormComponent } from './expenses-form/expenses-form.component';
import { TransactionComponent } from './transaction/transaction.component';
import { LabelsComponent } from './labels/labels.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgChartsModule } from 'ng2-charts';
import * as fromLabels from './+state/labels/labels.reducer';
import { LabelsEffects } from './+state/labels/labels.effects';

import * as fromTransactions from './+state/transactions/transactions.reducer';
import { TransactionsEffects } from './+state/transactions/transactions.effects';
import 'boxicons/dist/boxicons.js';
@NgModule({
  imports: [
    NgChartsModule,
    CommonModule,
    FeaturesRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(
      fromLabels.LABELS_FEATURE_KEY,
      fromLabels.labelsReducer
    ),
    StoreModule.forFeature(
      fromTransactions.TRANSACTIONS_FEATURE_KEY,
      fromTransactions.transactionsReducer
    ),
    EffectsModule.forFeature([LabelsEffects, TransactionsEffects]),
  ],
  declarations: [
    ExpensesComponent,
    LabelsComponent,
    ListComponent,
    ExpensesGraphComponent,
    ExpensesLabelsComponent,
    ExpensesFormComponent,
    TransactionComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeaturesModule {}
