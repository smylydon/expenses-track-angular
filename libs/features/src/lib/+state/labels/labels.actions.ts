import { createAction, props } from '@ngrx/store';
import { LabelsEntity } from './labels.models';

export enum LabelActionTypes {
  INITIALIZE = '[Labels Page] Init',
  ADD_LABEL = '[Labels/API] Add Label',
  ADD_LABEL_SUCCESS = '[Transaction/API] Add Transaction Success',
  ADD_LABEL_FAILURE = '[Transaction/API] Add Transaction Failure',
  DELETE_LABEL = '[Labels/API] Delete Label',
  DELETE_LABEL_SUCCESS = '[Labels/API] Delete Label Success',
  DELETE_LABEL_FAILURE = '[Labels/API] Delete Label Failure',
  LOAD_LABEL = '[Labels/API] Load Label',
  LOAD_LABEL_SUCCESS = '[Labels/API] Load Labels Success',
  LOAD_LABEL_FAILURE = '[Labels/API] Load Labels Failure',
}

export const initLabels = createAction(LabelActionTypes.INITIALIZE);

export const loadLabelsSuccess = createAction(
  LabelActionTypes.LOAD_LABEL_SUCCESS,
  props<{ labels: LabelsEntity[] }>()
);

export const loadLabelsFailure = createAction(
  LabelActionTypes.LOAD_LABEL_FAILURE,
  props<{ error: Error }>()
);

export const deleteLabel = createAction(
  LabelActionTypes.DELETE_LABEL,
  props<{ id: string }>()
);

export const deleteLabelSuccess = createAction(
  LabelActionTypes.DELETE_LABEL_SUCCESS,
  props<{ id: string }>()
);

export const deleteLabelFailure = createAction(
  LabelActionTypes.DELETE_LABEL_FAILURE,
  props<{ error: Error }>()
);
