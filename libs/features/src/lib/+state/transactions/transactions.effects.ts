import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as TransactionsActions from './transactions.actions';
import { ApiService } from '../../services/api.service';
import { mergeMap, map, catchError } from 'rxjs/operators';

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
          })
          // catchError((error: Error) => {
          //   console.error('Error', error);
          //   return TransactionsActions.loadTransactionsFailure({ error });
          // })
        );
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private apiService: ApiService
  ) {}
}
