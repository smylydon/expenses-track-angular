import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as LabelsActions from './labels.actions';
import { ApiService } from '../../services/api.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { LabelsEntity } from './labels.models';
import { of } from 'rxjs';

@Injectable()
export class LabelsEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LabelsActions.initLabels),
      mergeMap(() => {
        return this.apiService.getAllLabels().pipe(
          map((data: LabelsEntity[]) => {
            return LabelsActions.loadLabelsSuccess({
              labels: data || [],
            });
          }),
          catchError((error: any) => {
            return of(LabelsActions.loadLabelsFailure({ error }));
          })
        );
      })
    )
  );

  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LabelsActions.deleteLabel),
      mergeMap(({ id }) => {
        return this.apiService.deleteLabel(id).pipe(
          map((deletedId: string) => {
            return LabelsActions.deleteLabelSuccess({
              id: deletedId,
            });
          }),
          catchError((error: Error) => {
            console.error('Error', error);
            return of(LabelsActions.loadLabelsFailure({ error }));
          })
        );
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private apiService: ApiService
  ) {}
}
