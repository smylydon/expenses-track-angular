import { LabelsEntity } from './labels.models';
import {
  labelsAdapter,
  LabelsPartialState,
  initialLabelsState,
} from './labels.reducer';
import * as LabelsSelectors from './labels.selectors';

describe('Labels Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getLabelsId = (it: LabelsEntity) => it._id;
  const createLabelsEntity = (id: string, name = '') =>
    ({
      _id,
      name: name || `name-${_id}`,
    } as LabelsEntity);

  let state: LabelsPartialState;

  beforeEach(() => {
    state = {
      labels: labelsAdapter.setAll(
        [
          createLabelsEntity('PRODUCT-AAA'),
          createLabelsEntity('PRODUCT-BBB'),
          createLabelsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialLabelsState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Labels Selectors', () => {
    it('getAllLabels() should return the list of Labels', () => {
      const results = LabelsSelectors.getAllLabels(state);
      const selId = getLabelsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = LabelsSelectors.getSelectedLabel(state) as LabelsEntity;
      const selId = getLabelsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getLabelsLoaded() should return the current "loaded" status', () => {
      const result = LabelsSelectors.getLabelsLoaded(state);

      expect(result).toBe(true);
    });

    it('getLabelsError() should return the current "error" state', () => {
      const result = LabelsSelectors.getLabelsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
