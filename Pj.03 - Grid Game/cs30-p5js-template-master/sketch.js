// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Variables //
// Grid Variables:
let grid;
let gridSize;
let cellSize;

// Zombie Variables:
let zombieX, zombieY;
let zombieColor;

// Human Inbetween Variables:
let humanZombieInbetween;
let humanTurnedX, humanTurnedY;
let humanBit;

// Human Variables:
let humanX, humanY;
let humanX2, humanY2;

// Miscellaneous:
let centerScreen;


function setup() {
if (windowHeight > windowWidth) {
  createCanvas(windowWidth, windowWidth)
}
else {
  createCanvas(windowHeight, windowHeight)
}

// Grid
gridSize = 10
grid = createRandom2DArray(gridSize, gridSize);
cellSize = width/gridSize;

// Zombie
zombieX = 9// round(gridSize/2)-1;
zombieY = round(gridSize/2)-1;
zombieColor = 'green';

// Inbetween
humanBit = 0;

// Human
humanX = round(random(gridSize));
humanY = round(random(gridSize));
humanX2 = round(random(gridSize));
humanY2 = round(random(gridSize));

// micellaneous
centerScreen = round(gridSize / 2);
}

function draw() {
  background(0);
  displayGrid();
  npcHuman();
  humanTurned();
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

// Player //

function zombiePlayer() {
  fill(0);
  rect(zombieX*cellSize, zombieY*cellSize, cellSize, cellSize);
  
}

// Move with WASD //
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

// NPC Human //
function npcHuman() {
  if (humanBit === 0) {
    fill(225)
    if (zombieX === humanX && zombieY === humanY) {
      humanBit += 1;
    }
// "AI" //
    // else if (humanX < zombieX + 2) {
    //   humanX += 1;
    // }
    // else if (humanX > zombieX - 2) {
    //   humanX -= 1;
    // }
  }
  else if (humanBit === 1) {
    fill(zombieColor)

  }
  rect(humanX*cellSize, humanY*cellSize, cellSize, cellSize);
}


// finish AI to run away first//
function humanTurned() {
  if (humanBit === 1) {
    fill(225)
    rect(humanX2*cellSize, humanY2*cellSize, cellSize, cellSize);

  }
}