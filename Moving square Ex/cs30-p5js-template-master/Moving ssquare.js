// Interactive Scene
// Sebastian Favel-Delorme
// Feb 14, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x, y;
let squareSize;
let speed;
let state;


function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 0;
  y = 0;
  squareSize = 30;
  state = 1;
  speed = 5;
}

function draw() {
  background(220);
  determineState();
  moveAccordingstate();
  displaySquare();

}

function displaySquare() {
  fill(0);
  rect(x, y, squareSize, squareSize)
}

function determineState() {
  if (state === 1 && x >= width - squareSize){
    state = 2;
  }
}

function moveAccordingstate () {
  if (state === 1) {
    x += speed;
  }
}