import { assert } from 'chai';
import { weakPoint } from './index';

const example = [
    [7, 2, 7, 2, 8],
    [2, 9, 4, 1, 7],
    [3, 8, 6, 2, 4],
    [2, 5, 2, 9, 1],
    [6, 6, 5, 4, 5]
];

const twoPointsExample = [
    [7, 2, 4, 2, 8],
    [2, 8, 1, 1, 7],
    [3, 8, 6, 2, 4],
    [2, 5, 2, 9, 1],
    [6, 6, 5, 4, 5]
];

const topLeft = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
];

describe('Weak Point', () => {
    it('should return [3, 3] for Example', () => {
        assert.deepEqual(weakPoint(example), [3, 3]);
    });
    it('should return [1, 2] for TwoPointsExample', () => {
        assert.deepEqual(weakPoint(twoPointsExample), [1, 2]);
    });
    it('should return [0, 0] for TopLeft', () => {
        assert.deepEqual(weakPoint(topLeft), [0, 0]);
    });
});
