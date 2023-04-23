// Initialize first grid
const body = document.querySelector('body');
const container = document.createElement('div');
body.appendChild(container);
gridGenerator(16);

function gridGenerator(size) {
    const gridContainer = document.createElement('div');
    let row;
    let col;

    gridContainer.classList.add('grid-container');

    if (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for (let i = 0; i < size; i++) {
        row = document.createElement('div');
        for (let j = 0; j < size; j++) {
            col = document.createElement('div');
            col.classList.add('square');
            row.appendChild(col);
        }
        gridContainer.appendChild(row);
    }
    container.appendChild(gridContainer);
}