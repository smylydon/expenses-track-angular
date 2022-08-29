import { Action } from '@ngrx/store';

import * as TransactionsActions from './transactions.actions';
import { TransactionsEntity } from './transactions.models';
import {
  TransactionsState,
  initialTransactionsState,
  transactionsReducer,
} from './transactions.reducer';

describe('Transactions Reducer', () => {
  const createTransactionsEntity = (
    _id: string,
    name = ''
  ): TransactionsEntity => ({
    _id,
    name: name || `name-${_id}`,
  });

  describe('valid Transactions actions', () => {
    it('loadTransactionsSuccess should return the list of known Transactions', () => {
      const transactions = [
        createTransactionsEntity('PRODUCT-AAA'),
        createTransactionsEntity('PRODUCT-zzz'),
      ];
      const action = TransactionsActions.loadTransactionsSuccess({
        transactions,
      });

      const result: TransactionsState = transactionsReducer(
        initialTransactionsState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = transactionsReducer(initialTransactionsState, action);

      expect(result).toBe(initialTransactionsState);
    });
  });
});
