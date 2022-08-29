import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as TransactionsActions from './transactions.actions';
import { TransactionsEntity } from './transactions.models';

export const TRANSACTIONS_FEATURE_KEY = 'transactions';

export interface TransactionsState extends EntityState<TransactionsEntity> {
  selectedId?: string | number; // which Transactions record has been selected
  loaded: boolean; // has the Transactions list been loaded
  error?: Error | null; // last known error (if any)
}

export interface TransactionsPartialState {
  readonly [TRANSACTIONS_FEATURE_KEY]: TransactionsState;
}

export const transactionsAdapter: EntityAdapter<TransactionsEntity> =
  createEntityAdapter<TransactionsEntity>({
    selectId: (model: TransactionsEntity) => model._id,
  });

export const initialTransactionsState: TransactionsState =
  transactionsAdapter.getInitialState({
    // set initial required properties
    loaded: false,
  });

const reducer = createReducer(
  initialTransactionsState,
  on(TransactionsActions.initTransactions, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(TransactionsActions.loadTransactionsSuccess, (state, { transactions }) =>
    transactionsAdapter.setAll(transactions, { ...state, loaded: true })
  ),
  on(TransactionsActions.loadTransactionsFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(TransactionsActions.deleteTransaction, (state, action) => {
    return { ...state, loaded: false, error: null };
  }),
  on(TransactionsActions.deleteTransactionSuccess, (state, action) => {
    return transactionsAdapter.removeOne(action.id, {
      ...state,
      loaded: true,
      error: null,
    });
  })
);

export function transactionsReducer(
  state: TransactionsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
