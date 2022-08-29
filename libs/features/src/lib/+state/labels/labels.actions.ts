import { createAction, props } from '@ngrx/store';
import { LabelsEntity } from './labels.models';

export const initLabels = createAction('[Labels Page] Init');

export const loadLabelsSuccess = createAction(
  '[Labels/API] Load Labels Success',
  props<{ labels: LabelsEntity[] }>()
);

export const loadLabelsFailure = createAction(
  '[Labels/API] Load Labels Failure',
  props<{ error: Error }>()
);

export const deleteLabel = createAction(
  '[Labels/API] Delete Label',
  props<{ id: string }>()
);

export const deleteLabelSuccess = createAction(
  '[Labels/API] Delete Label Success',
  props<{ id: string }>()
);

export const deleteLabelFailure = createAction(
  '[Labels/API] Delete Label Failure',
  props<{ error: Error }>()
);
