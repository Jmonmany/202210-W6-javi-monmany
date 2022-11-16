import {
    make2DArray,
    randomNumber,
    setup,
    countNeighbors,
    nextArray,
} from './gameFunctions';

const columns = 5;
const rows = 5;

describe('Given the randomNumber function', () => {
    test(``, () => {
        const result = randomNumber(1000, 1);
        const expected = result > 1 || result < 1000;
        expect(expected).toBe(true);
    });
});

describe('Given the make2DArray function', () => {
    test(`the result should be true`, () => {
        const result = typeof [[]];
        const expected = typeof make2DArray(columns, rows);
        expect(expected).toEqual(result);
    });
    test(`the length should be 3`, () => {
        const result = 3;
        const expected = make2DArray(3, 3).length;
        expect(expected).toEqual(result);
    });
});

describe('Given the setup function', () => {
    const grid = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    test(`the result should be true`, () => {
        const result = grid.length;
        const expected = setup().length === result;
        expect(expected).toBe(true);
    });
    test.each(grid)(`the result should be true`, () => {
        const result = grid.includes(1);
        const expected = setup().includes(1);
        expect(expected).toBe(result);
    });
});

describe('Given the countNeighbors function', () => {
    const grid = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ];
    test(`the result given the array position grid[2][2] should be 2`, () => {
        const result = 2;
        const expected = countNeighbors(grid, 2, 2, 5, 5);
        expect(expected).toBe(result);
    });
});

describe('Given the nextArray function', () => {
    const grid1 = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ];
    const grid2 = [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
    ];
    test(`the result given the array grid1 should be the following`, () => {
        const result = [
            [0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0],
        ];
        const expected = nextArray(grid1, 5, 5);
        expect(expected).toEqual(result);
    });
    test(`the result given the array grid2 should be the following`, () => {
        const result = [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1],
        ];
        const expected = nextArray(grid2, 3, 3);
        expect(expected).toEqual(result);
    });
});
