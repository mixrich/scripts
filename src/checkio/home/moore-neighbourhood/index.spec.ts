import { assert } from 'chai';
import { mooreNeighbourhood } from './index';

const matrix5x5: number[][] = [
  [1, 0, 0, 1, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 0, 0, 0],
  [0, 0, 1, 0, 0]
];

const dense: number[][] = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
];

const single: number[][] = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];

const matrix5x6 = [
  [1,0,1,0,1],
  [0,1,0,1,0],
  [1,0,1,0,1],
  [0,1,0,1,0],
  [1,0,1,0,1],
  [0,1,0,1,0]
];

describe('Moore-neighbourhood', () => {
  it('should return 3 for matrix5x5 with coords {x: 1, y: 2}', () => {
    assert.equal(mooreNeighbourhood(matrix5x5, 1, 2), 3);
  });
  it('should return 1 for matrix5x5 with coords {x: 0, y: 0}', () => {
    assert.equal(mooreNeighbourhood(matrix5x5, 0, 0), 1);
  });
  it('should return 3 for Dense corner matrix with coords {x: 0, y: 2}', () => {
    assert.equal(mooreNeighbourhood(dense, 0, 2), 3);
  });
  it('should return 0 for single matrix with coords {x: 1, y: 1}', () => {
    assert.equal(mooreNeighbourhood(single, 1, 1), 0);
  });
  it('should return 2 for matrix5x6 with coords {x: 4, y: 5}', () => {
    assert.equal(mooreNeighbourhood(matrix5x6, 5, 4), 2);
  });
});
