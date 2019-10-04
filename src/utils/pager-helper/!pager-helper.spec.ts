import { assert } from 'chai';
import {IPagerHelperOptions, pagerHelper} from './pager-helper';

const examples: {value: IPagerHelperOptions, expected: number[]}[] = [
    {value: {total: 6, current: 6, length: 7}, expected: [1, 2, 3, 4, 5, 6]},
    {value: {total: 3, current: 1, length: 5}, expected: [1, 2, 3]},

    {value: {total: 12, current: 1, length: 5}, expected: [1, 2, 3, 4, 5]},
    {value: {total: 12, current: 2, length: 5}, expected: [1, 2, 3, 4, 5]},
    {value: {total: 12, current: 3, length: 5}, expected: [2, 3, 4, 5, 6]},
    {value: {total: 12, current: 4, length: 5}, expected: [3, 4, 5, 6, 7]},
    {value: {total: 12, current: 5, length: 5}, expected: [4, 5, 6, 7, 8]},
    {value: {total: 12, current: 6, length: 5}, expected: [5, 6, 7, 8, 9]},
    {value: {total: 12, current: 7, length: 5}, expected: [6, 7, 8, 9, 10]},
    {value: {total: 12, current: 8, length: 5}, expected: [7, 8, 9, 10, 11]},
    {value: {total: 12, current: 9, length: 5}, expected: [8, 9, 10, 11, 12]},
    {value: {total: 12, current: 10, length: 5}, expected: [8, 9, 10, 11, 12]},
    {value: {total: 12, current: 11, length: 5}, expected: [8, 9, 10, 11, 12]},
    {value: {total: 12, current: 12, length: 5}, expected: [8, 9, 10, 11, 12]},

    {value: {total: 22, current: 19, length: 10}, expected: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22]},
];

describe('PagerButtonsBuilder', () => {
    examples.forEach(ex => {
        it(`should return "${ex.expected}" for "position=${ex.value.current}" of "total count = ${ex.value.total}" with "length = "${ex.value.length}"`, () => {
            assert.equal(pagerHelper(ex.value).join(), ex.expected.join());
        })
    })
});
