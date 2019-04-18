// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Variables //
let grid;
let gridSize;
let cellSize;
let centerScreen;
let zombieX, zombieY;
let zombieColor;
let humanBit;
let humanX, humanY;


function setup() {
if (windowHeight > windowWidth) {
  createCanvas(windowWidth, windowWidth)
}
else {
  createCanvas(windowHeight, windowHeight)
}

gridSize = 10
grid = createRandom2DArray(gridSize, gridSize);
cellSize = width/gridSize;
zombieX = round(gridSize/2)-1;
zombieY = round(gridSize/2)-1;
zombieColor = 'green';
humanBit = 0;
humanX = round(random(gridSize));
humanY = round(random(gridSize));
centerScreen = round(gridSize / 2);
}

function draw() {
  background(0);
  displayGrid();
  npcHuman();
  zombiePlayer();
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

function zombiePlayer() {
  fill(0);
  rect(zombieX*cellSize, zombieY*cellSize, cellSize, cellSize);
}

function npcHuman() {
  if (humanBit === 0) {
    fill(225)
    if (zombieX === humanX && zombieY === humanY) {
      humanBit += 1;
    }
  }
  else if (humanBit === 1) {
    fill(zombieColor)
    humanTurned()
  }
  rect(humanX*cellSize, humanY*cellSize, cellSize, cellSize);
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

function humanTurned() {

}