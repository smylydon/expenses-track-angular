import { Action } from '@ngrx/store';

import * as LabelsActions from './labels.actions';
import { LabelsEntity } from './labels.models';
import {
  LabelsState,
  initialLabelsState,
  labelsReducer,
} from './labels.reducer';

describe('Labels Reducer', () => {
  const createLabelsEntity = (_id: string, name = ''): LabelsEntity => ({
    _id,
    name: name || `name-${_id}`,
    type: '',
    amount: 0,
    color: '',
  });

  describe('valid Labels actions', () => {
    it('loadLabelsSuccess should return the list of known Labels', () => {
      const labels = [
        createLabelsEntity('PRODUCT-AAA'),
        createLabelsEntity('PRODUCT-zzz'),
      ];
      const action = LabelsActions.loadLabelsSuccess({
        labels,
      });

      const result: LabelsState = labelsReducer(initialLabelsState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = labelsReducer(initialLabelsState, action);

      expect(result).toBe(initialLabelsState);
    });
  });
});
