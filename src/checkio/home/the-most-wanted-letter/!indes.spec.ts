import { assert } from 'chai';
import { mostWanted } from './index';

const examples = [
    { value: 'Hello World!', expected: 'l' },
    { value: 'How do you do?', expected: 'o' },
    { value: 'One', expected: 'e' },
    { value: 'Oops!', expected: 'o' },
    { value: 'AAaooo!!!!', expected: 'a' },
    { value: 'abe', expected: 'a' },
];

const lorem = `There are four substring missions that were born all in one day and you shouldn’t be needed more than one day to solve them. All of those mission can be simply solved by brute force, but is it always the best way to go? (you might not have access to all of those missions yet, but they are going to be available with more opened islands on the map). This mission is the first one of the series. Here you should find the length of the longest substring that consists of the same letter. For example, line "aaabbcaaaa" contains four substrings with the same letters "aaa", "bb","c" and "aaaa". The last substring is the longest one which makes it an answer.`

let long = '';

for (let i = 0; i < 5000; i++) {
    long += lorem;
}

describe('The Most Wanted Letter', () => {
    examples.forEach(ex => {
        it(`should return "${ex.expected}" for "${ex.value}"`, () => {
            assert.equal(mostWanted(ex.value), ex.expected);
        })
    });

    it(`should return "e" for message with 3000000 symbols length`, () => {
        assert.equal(mostWanted(long), 'e');
    })
})
