import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as LabelsActions from './labels.actions';
import { LabelsEntity } from './labels.models';

export const LABELS_FEATURE_KEY = 'labels';

export interface LabelsState extends EntityState<LabelsEntity> {
  selectedId?: string | number; // which Labels record has been selected
  loaded: boolean; // has the Labels list been loaded
  error?: string | null; // last known error (if any)
}

export interface LabelsPartialState {
  readonly [LABELS_FEATURE_KEY]: LabelsState;
}

export const labelsAdapter: EntityAdapter<LabelsEntity> =
  createEntityAdapter<LabelsEntity>({
    selectId: (model: LabelsEntity) => model._id,
  });

export const initialLabelsState: LabelsState = labelsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const reducer = createReducer(
  initialLabelsState,
  on(LabelsActions.initLabels, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(LabelsActions.loadLabelsSuccess, (state, { labels }) => {
    return labelsAdapter.setAll(labels, { ...state, loaded: true });
  }),
  on(LabelsActions.loadLabelsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function labelsReducer(state: LabelsState | undefined, action: Action) {
  return reducer(state, action);
}
