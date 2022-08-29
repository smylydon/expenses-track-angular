import { createAction, props } from '@ngrx/store';
import { LabelsEntity } from './labels.models';

export const initLabels = createAction('[Labels Page] Init');

export const loadLabelsSuccess = createAction(
  '[Labels/API] Load Labels Success',
  props<{ labels: LabelsEntity[] }>()
);

export const loadLabelsFailure = createAction(
  '[Labels/API] Load Labels Failure',
  props<{ error: any }>()
);
