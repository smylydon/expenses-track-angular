import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as LabelsActions from './labels.actions';
import { ApiService } from '../../services/api.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { LabelsEntity } from './labels.models';

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
          })
          // catchError((error: any) => {
          //   console.error('Error', error);
          //   return LabelsActions.loadLabelsFailure({ error });
          // })
        );
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private apiService: ApiService
  ) {}
}
