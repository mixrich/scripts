import { assert } from 'chai';
import { duration } from './duration';

const examples = [
    {value: 5400, expected: '1h 30min'},
    {value: 12661, expected: '3h 31min 1sec'},
    {value: 1, expected: '1sec'},
    {value: 3599, expected: '59min 59sec'},
    {value: 0, expected: ''},
    {value: null, expected: ''},
    {value: 3600, expected: '1h'},
    {value: 180, expected: '3min'},
];

describe('Duration', () => {
    examples.forEach(ex => {
        it(`should return "${ex.expected}" for "${ex.value}"`, () => {
            assert.equal(duration(ex.value), ex.expected);
        })
    })
})
