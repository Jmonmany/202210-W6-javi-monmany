//
import { isArray } from './gameFunctions';

// const arrayTest = [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
// ];

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
