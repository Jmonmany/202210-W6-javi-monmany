/* eslint-disable no-unused-vars */
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

function make2DArray(columns, rows) {
    let array = new Array(columns);

    for (let i = 0; i < array.length; i++) {
        array[i] = new Array(rows);
    }
    return array;
}

let grid;
let columns = 10;
let rows = 10;

function setup() {
    grid = make2DArray(columns, rows);
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = randomNumber(1, 0);
        }
    }
    console.log(grid);
}

// function nextArray() {
//     let next = make2DArray(columns, rows);
//     for (let i = 0; i < columns; i++) {
//         for (let j = 0; j < rows; j++) {

//             let state = grid[i][j];

//             if (i === 0 || i === columns - 1 || j === 0 || j === rows - 1) {
//                 next[i][j] = state;
//             } else {
//                 let neighbors = countNeighbors(grid, i, j);

//                 if (state === 0 && neighbors === 3) {
//                     next[i][j] = 1;
//                 }
//                 if( state === 1 && (neighbors < 2 || neighbors > 3)) {
//                     next[i][j] = 0;
//                 } else {
//                     next[i][j] = state;
//                 }
//             }
//         }
//     }
// }
function countNeighbors(grid, x, y) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            sum += grid[x + i][y + j];
        }
    }
    sum -= grid[x][y];
    return sum;
}

// const arrayTest = [
//     [0, 1, 0],
//     [0, 1, 0],
//     [0, 1, 0],
// ];

// export const algorithm = (array) => {
//     for (let r = 0; r < array.length; r++) {
//         for (let c = 0; c < array.length; c++) {
//             checkHorizontal(array[r][c]);
//             checkVertical(array[r][c]);
//             checkDiagonallyUp(array[r][c]);
//             checkDiagonallyDown(array[r][c]);
//         }
//     }
// };

// export const generationInterval = (array) => {
//     setInterval(() => {
//         let generation = generationCell(array);
//         return generation;
//     }, 1000);
// };

// export const checkHorizontal = (value, array) => {
//     for (let r = 0; r < array.length; r++) {
//         for (let c = 0; c < array.length; c++) {
//             if (
//                 array[r][c] === array[r][c + 1] &&
//                 array[r][c] === array[r - 1][c]
//             ) {
//                 return true;
//             }
//         }
//     }
// };

// export const checkVertical = (array) => {
//     for (let r = 0; r < array.length; r++) {
//         for (let c = 0; c < array.length; c++) {
//             if (array[r][c] !== 0) {
//                 let isUndefined = array[r - 1][c];
//                 if (array[r - 1][c] === undefined) {
//                     return console.log(false);
//                 }

//                 if (
//                     array[r][c] === array[r + 1][c] &&
//                     array[r][c] === array[r - 1][c]
//                 ) {
//                     return console.log(true);
//                 }
//             }
//         }
//     }
// };

// export const checkDiagonallyUp = (array) => {
//     for (let r = 0; r < array.length; r++) {
//         for (let c = 0; c < array.length; c++) {
//             if (array[r][c] !== 0) {
//                 let isUndefined = array[r - 1][c];
//                 if (array[r - 1][c] === undefined) {
//                     return console.log(false);
//                 }

//                 if (
//                     array[r][c] === array[r + 1][c] &&
//                     array[r][c] === array[r - 1][c]
//                 ) {
//                     return console.log(true);
//                 }
//             }
//         }
//     }
// };

// export const checkDiagonallyDown = (array) => {
//     for (let r = 0; r < array.length; r++) {
//         for (let c = 0; c < array.length; c++) {
//             if (array[r][c] !== 0) {
//                 let isUndefined = array[r - 1][c];
//                 if (array[r - 1][c] === undefined) {
//                     return console.log(false);
//                 }

//                 if (
//                     array[r][c] === array[r + 1][c] &&
//                     array[r][c] === array[r - 1][c]
//                 ) {
//                     return console.log(true);
//                 }
//             }
//         }
//     }
// };
// // export const checkDeathOrAlive = (array) => {

// // }
