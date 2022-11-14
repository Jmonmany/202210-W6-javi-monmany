//
export const isArray = (value) => {
    if (value === null) return false;
    if (typeof value === typeof []) return true;
    return false;
};
export const randomNumber = (maximum, minimum) => {
    const number =
        Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    return number;
};

export function make2DArray(columns, rows) {
    let array = new Array(columns);
    for (let i = 0; i < array.length; i++) {
        array[i] = new Array(rows);
    }
    return array;
}
let grid;
const columns = 10;
const rows = 10;
export function setup() {
    grid = make2DArray(columns, rows);
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = randomNumber(1, 0);
        }
    }
    return grid;
}

export function nextArray(grid, columns, rows) {
    let next = make2DArray(columns, rows);
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            let state = grid[i][j];

            // Playing with the borders
            // if (i === 0 || i === columns - 1 || j === 0 || j === rows - 1) {
            //     next[i][j] = state;
            // } else {
            let neighbors = countNeighbors(grid, i, j, columns, rows);
            if (state === 0 && neighbors === 3) {
                next[i][j] = 1;
                continue;
            }
            if (state === 1 && (neighbors < 2 || neighbors > 3)) {
                next[i][j] = 0;
                continue;
            }
            next[i][j] = state;
            // }
        }
    }
    grid = next;
    return grid;
}
export function countNeighbors(grid, x, y, columns, rows) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            // Playing with the borders
            // sum += grid[x + i][y + j];
            let column = (x + i + columns) % columns;
            let row = (y + j + rows) % rows;
            sum += grid[column][row];
        }
    }
    sum -= grid[x][y];
    return sum;
}
