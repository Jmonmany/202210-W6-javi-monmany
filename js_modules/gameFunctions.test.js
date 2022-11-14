//
import {
    isArray,
    randomNumber,
    // setup,
    // countNeighbors,
    // nextArray,
    // make2DArray,
} from './gameFunctions';

const cases = [6, 'Hello', false, NaN, undefined, null];

describe('Given isArray function', () => {
    test.each(cases)(
        `When the input is %p the result should be false`,
        (value) => {
            const expected = false;
            const result = isArray(value);
            expect(result).toBe(expected);
        }
    );
    test(`When the input is an array the result should be true`, () => {
        const expected = true;
        const result = isArray(cases);
        expect(result).toEqual(expected);
    });
});

describe('Given the randomNumber function', () => {
    test(``, () => {
        const result = randomNumber(1000, 1);
        const expected = result > 1 || result < 1000;
        expect(expected).toBe(true);
    });
});
