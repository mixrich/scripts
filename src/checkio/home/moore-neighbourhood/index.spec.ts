import { assert } from 'chai';
import {mooreNeighbourhood} from './index';

const first: number[][] = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
];

describe('Moore-neighbourhood', () => {
    it('should return 3 for 3x3 matrix with all items === 1 for element with coords {x: 0, y: 0}', () => {
        assert.equal(mooreNeighbourhood(first, 0, 0), 3);
    });
});
