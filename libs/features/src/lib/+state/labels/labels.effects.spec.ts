import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as LabelsActions from './labels.actions';
import { LabelsEffects } from './labels.effects';

describe('LabelsEffects', () => {
  let actions: Observable<Action>;
  let effects: LabelsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        LabelsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(LabelsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: LabelsActions.initLabels() });

      const expected = hot('-a-|', {
        a: LabelsActions.loadLabelsSuccess({ labels: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
