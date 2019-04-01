import { assert } from 'chai';
import { romanNumerals } from './index';


const examples = [
    {value: 6, expected: 'VI'},
    {value: 76, expected: 'LXXVI'},
    {value: 12, expected: 'XII'},
    {value: 13, expected: 'XIII'},
    {value: 44, expected: 'XLIV'},
    {value: 99, expected: 'XCIX'},
    {value: 499, expected: 'CDXCIX'},
    {value: 3888, expected: 'MMMDCCCLXXXVIII'},
    {value: 3999, expected: 'MMMCMXCIX'},
];

describe('Roman Numerals', () => {
    examples.forEach(ex => {
        it(`should return «${ex.expected}» for «${ex.value}»`, () => {
            assert.equal(romanNumerals(ex.value), ex.expected);
        });
    })
});
