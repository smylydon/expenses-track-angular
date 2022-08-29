import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  TRANSACTIONS_FEATURE_KEY,
  TransactionsState,
  transactionsAdapter,
} from './transactions.reducer';

// Lookup the 'Transactions' feature state managed by NgRx
export const getTransactionsState = createFeatureSelector<TransactionsState>(
  TRANSACTIONS_FEATURE_KEY
);

const { selectAll, selectEntities } = transactionsAdapter.getSelectors();

export const getTransactionsLoaded = createSelector(
  getTransactionsState,
  (state: TransactionsState) => state.loaded
);

export const getTransactionsError = createSelector(
  getTransactionsState,
  (state: TransactionsState) => state.error
);

export const getAllTransactions = createSelector(
  getTransactionsState,
  (state: TransactionsState) => selectAll(state)
);

export const getTransactionsEntities = createSelector(
  getTransactionsState,
  (state: TransactionsState) => selectEntities(state)
);

export const getSelectedTransactionId = createSelector(
  getTransactionsState,
  (state: TransactionsState) => state.selectedId
);

export const getSelectedTransaction = createSelector(
  getTransactionsEntities,
  getSelectedTransactionId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
