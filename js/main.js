let color = 'black';
let isDrawing = false;

function generateGrid(size) {
  const grid = document.querySelector('#grid');

  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  grid.innerHTML = '';

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const div = document.createElement('div');

      div.addEventListener('mousemove', draw);

      grid.appendChild(div);
    }
  }
}

function draw() {
  if (!isDrawing) return;

  this.style.backgroundColor = color;
  this.style.borderColor = color;
}

function clearGrid() {
  const grid = document.querySelectorAll('#grid div');

  grid.forEach(div => {
    div.style.backgroundColor = '#FFF'
    div.style.borderColor = 'rgb(243, 243, 243)';
  });
}

function newGrid() {
  const size = window.prompt('New grid size');

  if (size >= 2 && size <= 100) generateGrid(size);
}

function changeColor(e) {
  color = e.target.value;
}

const newBtn = document.querySelector('#new');
newBtn.addEventListener('click', newGrid);

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', clearGrid);

const colorBtn = document.querySelector('#color');
colorBtn.addEventListener('change', changeColor);
colorBtn.addEventListener('click', changeColor);

const eraseBtn = document.querySelector('#erase');
eraseBtn.addEventListener('click', () => color = '#FFF');

const grid = document.querySelector('#grid');
grid.addEventListener('mousedown', () => isDrawing = true);
grid.addEventListener('mouseup', () => isDrawing = false);

generateGrid(16);