import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ExpensesComponent } from './expenses/expenses.component';
import { FeaturesRoutingModule } from './features.routing.module';
import { ListComponent } from './list/list.component';
import { ExpensesGraphComponent } from './expenses-graph/expenses-graph.component';
import { ExpensesLabelsComponent } from './expenses-labels/expenses-labels.component';
import { ExpensesFormComponent } from './expenses-form/expenses-form.component';

@NgModule({
  imports: [CommonModule, FeaturesRoutingModule, ReactiveFormsModule],
  declarations: [
    ExpensesComponent,
    ListComponent,
    ExpensesGraphComponent,
    ExpensesLabelsComponent,
    ExpensesFormComponent,
  ],
})
export class FeaturesModule {}
