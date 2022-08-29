import { createAction, props } from '@ngrx/store';
import { TransactionsEntity } from './transactions.models';

export const initTransactions = createAction('[Transactions Page] Init');

export const loadTransactionsSuccess = createAction(
  '[Transactions/API] Load Transactions Success',
  props<{ transactions: TransactionsEntity[] }>()
);

export const loadTransactionsFailure = createAction(
  '[Transactions/API] Load Transactions Failure',
  props<{ error: any }>()
);

export const addTransaction = createAction(
  '[Transactions/API] Add Transaction',
  props<{ model: TransactionsEntity }>()
);

export const addTransactionSuccess = createAction(
  '[Transaction/API] Add Transaction Success',
  props<{ id: string }>()
);

export const addTransactionFailure = createAction(
  '[Transaction/API] Add Transaction Failure',
  props<{ error: Error }>()
);

export const deleteTransaction = createAction(
  '[Transactions/API] Delete Transaction',
  props<{ id: string }>()
);

export const deleteTransactionSuccess = createAction(
  '[Transaction/API] Delete Transaction Success',
  props<{ id: string }>()
);

export const deleteTransactionFailure = createAction(
  '[Transaction/API] Delete Transaction Failure',
  props<{ error: Error }>()
);
