import { sumTwoNumbers } from './sum.js';
const sum = sumTwoNumbers;

describe ('sum two numbers', () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    it('adds 8 + 8 to equal 16', () => {
        expect(sum(8, 8)).toBe(16);
    });
});