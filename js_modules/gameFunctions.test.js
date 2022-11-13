//
import {
    isArray,
    randomNumber
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

// describe('Given the generationInterval function', () => {
//     const arrayTest = [
//         [0, 0, 0],
//         [0, 0, 0],
//         [0, 0, 0],
//     ];
//     test(`arrays should be different from each other`, () => {
//         const expected = arrayTest === generationInterval(arrayTest);
//         const result = expected === generationInterval(arrayTest);
//         expect(result).toBe(false);
//     });
// });

// describe('Given the checkDeathOrAlive function', () => {
//     const arrayTest = [
//         [0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     ];
//     generationCell(arrayTest)
//     test.each(arrayTest)(`arrays should be different from each other`, (value) => {
//         const expected = arrayTest
//         const result = value
//         expect(result).toBe(expected);
//     });
// });

// describe('Given the checkHorizontal function', () => {
//     const arrayTest = [
//         [0, 0, 0],
//         [1, 1, 1],
//         [0, 0, 0],
//     ];
//     test(`the result should be true`, () => {
//         const expected = true;
//         const result = checkHorizontal(arrayTest);
//         expect(result).toBe(expected);
//     });
// });

// describe('Given the checkVertical function', () => {
//     const arrayTest = [
//         [0, 1, 0],
//         [0, 1, 0],
//         [0, 1, 0],
//     ];
//     test(`the result should be true`, () => {
//         const expected = true;
//         const result = checkVertical(arrayTest);
//         expect(result).toBe(expected);
//     });
// });

// describe('Given the checkDiagonallyUp function', () => {
//     const arrayTest = [
//         [0, 0, 1],
//         [0, 1, 0],
//         [1, 0, 0],
//     ];
//     test(`the result should be true`, () => {
//         const expected = true;
//         const result = checkDiagonallyUp(arrayTest[1][1]);
//         expect(result).toBe(expected);
//     });
// });
// describe('Given the checkDiagonallyDown function', () => {
//     const arrayTest = [
//         [1, 0, 0],
//         [0, 1, 0],
//         [0, 0, 1],
//     ];
//     test(`the result should be true`, () => {
//         const expected = true;
//         const result = checkDiagonallyDown(arrayTest[1][1]);
//         expect(result).toBe(expected);
//     });
// });
