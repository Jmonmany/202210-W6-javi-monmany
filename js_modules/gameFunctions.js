let htmlElements = [];
let EMPTY = 0;
const size = 50;
let cells = [];

const refreshButton = document.getElementById('refresh-button');
const playButton = document.getElementById('start-button');

export const randomNumber = (maximum, minimum) => {
    const number =
        Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    return number;
};

// const tiles = document.querySelectorAll('.tile');
export function make2DArray(cells, size) {
    let table = document.getElementById('board');
    for (let i = 0; i < size; i++) {
        let tr = document.createElement('tr');
        let tdElements = [];
        cells.push(new Array(size).fill(EMPTY));
        htmlElements.push(tdElements);
        table.appendChild(tr);
        for (let j = 0; j < size; j++) {
            let td = document.createElement('td');
            // old way
            // tile.id = i.toString() + '-' + j.toString();
            // tile.classList.add('tile');
            // document.getElementById('board').append(tile);
            tdElements.push(td);
            tr.appendChild(td);
        }
    }
}

export function setup(cells, size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            // let tile = document.getElementById(`${i}-${j}`);
            htmlElements[i][j].setAttribute(
                'class',
                'cell ' + (cells[i][j] === 1 ? 'alive' : 'dead')
            );
        }
    }
}

export function setGame() {
    make2DArray(cells, size);
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            cells[i][j] = randomNumber(1, 0);
        }
    }
    setup(cells, size);
    console.log(cells);
}

export function nextArray() {
    let newCells = [];
    for (let i = 0; i < size; i++) {
        newCells.push(new Array(size).fill(EMPTY));
        for (let j = 0; j < size; j++) {
            let state = cells[i][j];

            // Playing with borders
            // if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
            //     next[i][j] = state;
            // } else {
            let neighbors = countNeighbors(cells, i, j, size);
            if (state === 0 && neighbors === 3) {
                newCells[i][j] = 1;
                continue;
            }
            if (state === 1 && (neighbors < 2 || neighbors > 3)) {
                newCells[i][j] = 0;
                continue;
            }
            newCells[i][j] = state;
            // }
        }
    }
    cells = newCells;
    console.log(cells);
    setup(cells, size);
    return cells;
}
export function countNeighbors(cells, x, y, size) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            // Playing with borders
            // sum += grid[x + i][y + j];
            let column = (x + i + size) % size;
            let row = (y + j + size) % size;
            sum += cells[column][row];
        }
    }
    sum -= cells[x][y];
    return sum;
}

export function startGame() {
    playButton.style.display = 'none';
    setInterval(() => {
        nextArray();
    }, 1000);
}

export const reloadGame = () => {
    window.location.reload();
};

playButton.addEventListener('click', startGame);
refreshButton.addEventListener('click', reloadGame);
