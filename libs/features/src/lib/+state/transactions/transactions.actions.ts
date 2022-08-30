import { createAction, props } from '@ngrx/store';
import { TransactionsEntity } from './transactions.models';

export enum TransactionActionTypes {
  INITIALIZE = '[Transactions Page] Initialize',
  ADD_TRANSACTION = '[Transactions/API] Add Transaction',
  ADD_TRANSACTION_SUCCESS = '[Transaction/API] Add Transaction Success',
  ADD_TRANSACTION_FAILURE = '[Transaction/API] Add Transaction Failure',
  DELETE_TRANSACTION = '[Transactions/API] Delete Transaction',
  DELETE_TRANSACTION_SUCCESS = '[Transaction/API] Delete Transaction Success',
  DELETE_TRANSACTION_FAILURE = '[Transaction/API] Delete Transaction Failure',
  LOAD_TRANSACTION = '[Transactions/API] Load Transaction',
  LOAD_TRANSACTION_SUCCESS = '[Transactions/API] Load Transactions Success',
  LOAD_TRANSACTION_FAILURE = '[Transactions/API] Load Transactions Failure',
}

export const initTransactions = createAction(TransactionActionTypes.INITIALIZE);

export const loadTransactionsSuccess = createAction(
  TransactionActionTypes.LOAD_TRANSACTION_SUCCESS,
  props<{ transactions: TransactionsEntity[] }>()
);

export const loadTransactionsFailure = createAction(
  TransactionActionTypes.LOAD_TRANSACTION_FAILURE,
  props<{ error: any }>()
);

export const addTransaction = createAction(
  TransactionActionTypes.ADD_TRANSACTION,
  props<{ model: TransactionsEntity }>()
);

export const addTransactionSuccess = createAction(
  TransactionActionTypes.ADD_TRANSACTION_SUCCESS,
  props<{ id: string }>()
);

export const addTransactionFailure = createAction(
  TransactionActionTypes.ADD_TRANSACTION_FAILURE,
  props<{ error: Error }>()
);

export const deleteTransaction = createAction(
  TransactionActionTypes.DELETE_TRANSACTION,
  props<{ id: string }>()
);

export const deleteTransactionSuccess = createAction(
  TransactionActionTypes.DELETE_TRANSACTION_SUCCESS,
  props<{ id: string }>()
);

export const deleteTransactionFailure = createAction(
  TransactionActionTypes.DELETE_TRANSACTION_FAILURE,
  props<{ error: Error }>()
);
