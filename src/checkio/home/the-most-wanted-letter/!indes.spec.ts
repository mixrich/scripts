import { assert } from 'chai';
import { mostWanted } from './index';

const examples = [
    { value: 'Hello World!', expected: 'l' },
    { value: 'How do you do?', expected: 'o' },
    { value: 'One', expected: 'e' },
    { value: 'Oops!', expected: 'o' },
    { value: 'AAaooo!!!!', expected: 'a' },
    { value: 'abe', expected: 'a' },
]

describe('The Most Wanted Letter', () => {
    examples.forEach(ex => {
        it(`should return "${ex.expected}" for "${ex.value}"`, () => {
            assert.equal(mostWanted(ex.value), ex.expected);
        })
    });
})
