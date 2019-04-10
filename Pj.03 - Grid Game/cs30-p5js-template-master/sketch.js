// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Variables //
let grid;
let gridSize = 25;
let cellSize;
let centerScreen;
let zombieX, zombieY;
let humanBobX, humanBobY;


function setup() {
if (windowHeight > windowWidth) {
  createCanvas(windowWidth, windowWidth)
}
else {
  createCanvas(windowHeight, windowHeight)
}
grid = createRandom2DArray(gridSize, gridSize);
cellSize = width/gridSize;
zombieX = 1;
zombieY = 1;
centerScreen = round(gridSize / 2);
}

function draw() {
  background(0);
  displayGrid();
  humanBob();
  zombie();
}

function displayGrid() {
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      if (grid[y][x] === 0) {
        fill(150);
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

function zombie() {
  fill(0);
  rect(zombieX*cellSize, zombieY*cellSize, cellSize, cellSize);
  if (gridSize === gridSize + 1) {

  }
}

function keyTyped() {
  if (key === 'd') {
    zombieX = zombieX + 1
  }
  else if (key === 'a') {
    zombieX = zombieX - 1
  }
  else if (key === 's') {
    zombieY = zombieY + 1
  }
  else if (key === 'w') {
    zombieY = zombieY - 1
  }
}

function humanBob() {
  fill(255);
  rect(centerScreen*cellSize, centerScreen*cellSize, cellSize, cellSize);
  if (zombieX === humanBobX && zombieY === humanBobY) {

  }
}