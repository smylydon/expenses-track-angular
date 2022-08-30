import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as TransactionsActions from './transactions.actions';
import * as labelsActions from '../labels/labels.actions';

import { ApiService } from '../../services/api.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { TransactionsEntity } from './transactions.models';

@Injectable()
export class TransactionsEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TransactionsActions.initTransactions),
      mergeMap(() => {
        return this.apiService.getAllTransactions().pipe(
          map((response: any) => {
            return TransactionsActions.loadTransactionsSuccess({
              transactions: response.data,
            });
          }),
          catchError((error: Error) => {
            return of(TransactionsActions.loadTransactionsFailure({ error }));
          })
        );
      })
    )
  );

  add$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TransactionsActions.addTransaction),
      mergeMap(({ model }) => {
        return this.apiService.addTransaction(model).pipe(
          map(() => {
            return labelsActions.initLabels();
          }),
          catchError((error: Error) => {
            return of(TransactionsActions.loadTransactionsFailure({ error }));
          })
        );
      })
    )
  );

  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TransactionsActions.deleteTransaction),
      mergeMap(({ id }) => {
        return this.apiService.deleteTransaction(id).pipe(
          map((deletedId: string) => {
            return labelsActions.initLabels();
          }),
          catchError((error: Error) => {
            return of(TransactionsActions.loadTransactionsFailure({ error }));
          })
        );
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private apiService: ApiService
  ) {}
}
