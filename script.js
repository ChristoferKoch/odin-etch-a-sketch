// Initialize first grid
const body = document.querySelector('body');
const container = document.createElement('div');
body.appendChild(container);
gridGenerator(16);

const userInput = document.createElement('button');
userInput.innerText = 'Input Size';
userInput.addEventListener('click', (e) => {
    gridGenerator(prompt('Please enter a width:'));
});
body.appendChild(userInput);

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
        row.classList.add('row-container');
        for (let j = 0; j < size; j++) {
            col = document.createElement('div');
            col.classList.add('square');
            col.addEventListener('mouseenter', (e) => {
                e.target.style.backgroundColor = 'black';
            });
            row.appendChild(col);
        }
        gridContainer.appendChild(row);
    }
    container.appendChild(gridContainer);
}