// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid;
let gridSize = 25;
let cellSize;
let centerScreen = round(gridSize / 2);

function setup() {

if (windowHeight > windowWidth) {
  createCanvas(windowWidth, windowWidth)
}
else {
  createCanvas(windowHeight, windowHeight)
}

grid = createRandom2DArray(gridSize, gridSize);
cellSize = width/gridSize;
}

function draw() {
  background(0);
  displayGrid();
}

function displayGrid() {
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      if (grid[y][x] === 0) {
        fill(255);
      }
      else {
        fill(0);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function createRandom2DArray(cols, rows) {
  let emptyArray = [];
  for (let i = 0; i < rows; i++) {
    emptyArray.push([]);
    for (let j = 0; j < cols; j++) {
      if (random(100) < 50) {
        emptyArray[i].push(0);
      }
      else {
        emptyArray[i].push(0);
      }
    }
  }
  return emptyArray;
}

