import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  LABELS_FEATURE_KEY,
  LabelsState,
  labelsAdapter,
} from './labels.reducer';

// Lookup the 'Labels' feature state managed by NgRx
export const getLabelsState =
  createFeatureSelector<LabelsState>(LABELS_FEATURE_KEY);

const { selectAll, selectEntities } = labelsAdapter.getSelectors();

export const getLabelsLoaded = createSelector(
  getLabelsState,
  (state: LabelsState) => state.loaded
);

export const getLabelsError = createSelector(
  getLabelsState,
  (state: LabelsState) => state.error
);

export const getAllLabels = createSelector(
  getLabelsState,
  (state: LabelsState) => {
    console.log('state is:', state);
    return selectAll(state);
  }
);

export const getLabelsEntities = createSelector(
  getLabelsState,
  (state: LabelsState) => selectEntities(state)
);

export const getSelectedLabelId = createSelector(
  getLabelsState,
  (state: LabelsState) => state.selectedId
);

export const getSelectedLabel = createSelector(
  getLabelsState,
  getSelectedLabelId,
  (entities, selectedId) => (selectedId ? selectedId in entities : undefined)
);
