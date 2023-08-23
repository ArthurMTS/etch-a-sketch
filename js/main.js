let color = "#000";
let isDrawing = false;

function generateGrid(size) {
  const grid = document.querySelector("#grid");
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.innerHTML = "";

  for (let i = 0; i < size; i++)
    for (let j = 0; j < size; j++) {
      const cell = document.createElement("div");
      cell.addEventListener("mousemove", draw);

      grid.appendChild(cell);
    }
}

function draw() {
  if (!isDrawing) return;

  this.style.backgroundColor = color;
  this.style.borderColor = color === "#fff" ? "#f1f1f1" : color;
}

function clearGrid() {
  const grid = document.querySelectorAll("#grid div");
  grid.forEach((cell) => {
    cell.style.backgroundColor = "#fff";
    cell.style.borderColor = "#f1f1f1";
  });
}

function newGrid() {
  const size = window.prompt("New grid size");

  if (size >= 2 && size <= 128) generateGrid(size);
}

function changeColor(event, element) {
  color = event.target.value;
  element.style.backgroundColor = color;
}

const newBtn = document.querySelector("#new");
newBtn.addEventListener("click", newGrid);

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", clearGrid);

const colorBtn = document.querySelector("#color");
colorBtn.addEventListener("change", (e) => changeColor(e, colorBtn));
colorBtn.addEventListener("click", (e) => changeColor(e, colorBtn));

const eraseBtn = document.querySelector("#eraser");
eraseBtn.addEventListener("click", () => (color = "#fff"));

const grid = document.querySelector("#grid");
grid.addEventListener("mousedown", () => (isDrawing = true));
grid.addEventListener("mouseup", () => (isDrawing = false));

generateGrid(16);
