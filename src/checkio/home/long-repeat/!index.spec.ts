import { assert } from 'chai';
import { longRepeat } from './index'

const examples = [
    {value: 'sdsffffse', expected: 4},
    {value: 'ddvvrwwwrggg', expected: 3},
    {value: 'abbcccddddeeeeeaabb', expected: 5},
    {value: '22444499999999922', expected: 9},
    {value: 'd g', expected: 1},
    {value: 'aa', expected: 2},
    {value: '', expected: 0},
];

describe('Long Repeat', () => {
    examples.forEach(ex => {
        it(`should return "${ex.expected}" for "${ex.value}"`, () => {
            assert.equal(longRepeat(ex.value), ex.expected);
        })
    })
})
