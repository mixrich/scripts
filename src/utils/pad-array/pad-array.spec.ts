import { assert } from 'chai';
import { padArray } from './pad-array'

const array = [1, 2, 3, 4, 5, 6];

const examples: {value: any[], lenght: number, expected: any[]}[] = [
    { value: [1, 2, 3], lenght: 5, expected: [1, 2, 3, null, null] },
    { value: [1], lenght: 5, expected: [1, null, null, null, null] },
    { value: [1, 2, 3], lenght: 2, expected: [1, 2] },
    { value: [1, 2, 3, null], lenght: 4, expected: [1, 2, 3, null] },
    { value: [], lenght: 2, expected: [null, null] },
];

describe('Array get loop items', () => {
    examples.forEach(ex => {
        it(`should return "${ex.expected.join('')}" for "array=${array.join()}"`, () => {
            assert.sameOrderedMembers(padArray(ex.value, ex.lenght), ex.expected);
        })
    })
});
