import { assert } from 'chai';
import {arrayLoopedItems} from './array-looped-items';


const array = [1, 2, 3, 4, 5, 6];

const examples: {value: {l: number, i: number}, expected: number[]}[] = [
    {value: {i: 0, l: 2}, expected: [1, 2]},
    {value: {i: 1, l: 2}, expected: [2, 3]},
    {value: {i: 2, l: 2}, expected: [3, 4]},
    {value: {i: 5, l: 2}, expected: [6, 1]},

    {value: {i: 0, l: 3}, expected: [6, 1, 2]},
    {value: {i: 1, l: 3}, expected: [1, 2, 3]},
    {value: {i: 2, l: 3}, expected: [2, 3, 4]},
    {value: {i: 5, l: 3}, expected: [5, 6, 1]},

    {value: {i: 0, l: 4}, expected: [6, 1, 2, 3]},
    {value: {i: 1, l: 4}, expected: [1, 2, 3, 4]},
    {value: {i: 2, l: 4}, expected: [2, 3, 4, 5]},
    {value: {i: 5, l: 4}, expected: [5, 6, 1, 2]},

    {value: {i: 0, l: 5}, expected: [5, 6, 1, 2, 3]},
    {value: {i: 1, l: 5}, expected: [6, 1, 2, 3, 4]},
    {value: {i: 2, l: 5}, expected: [1, 2, 3, 4, 5]},
    {value: {i: 3, l: 5}, expected: [2, 3, 4, 5, 6]},
    {value: {i: 4, l: 5}, expected: [3, 4, 5, 6, 1]},
    {value: {i: 5, l: 5}, expected: [4, 5, 6, 1, 2]},

    {value: {i: 0, l: 15}, expected: [6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2]},
    {value: {i: 1, l: 15}, expected: [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3]},
    {value: {i: 2, l: 15}, expected: [2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4]},
    {value: {i: 3, l: 15}, expected: [3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5]},
    {value: {i: 4, l: 15}, expected: [4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]},
    {value: {i: 5, l: 15}, expected: [5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1]},
];

describe('Array get loop items', () => {
    examples.forEach(ex => {
        it(`should return "${ex.expected}" for "array=${array.join()}", "count = ${ex.value.l}" with "index= "${ex.value.i}"`, () => {
            assert.sameOrderedMembers(arrayLoopedItems(array, ex.value.i, ex.value.l), ex.expected);
        })
    })
});
