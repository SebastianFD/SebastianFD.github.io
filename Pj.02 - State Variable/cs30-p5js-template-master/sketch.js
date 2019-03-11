// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state;
let blobBeginningSize;
let blobPositionX;

function setup() {
  createCanvas(windowWidth, windowHeight);
  blobBeginningSize = windowWidth / 20;
  blobPositionX = 0;
  state = blobState1;
  
}

function draw() {
  background(220);
  statePicker();
  rect(blobPositionX, windowHeight - blobBeginningSize, blobWidth, blobBeginningSize);
}


function keyTyped() {
  if (blobPositionX >= 0 && blobPositionX <= windowWidth - blobBeginningSize) {
    if (key === 'd') {
      blobPositionX = blobPositionX + blobBeginningSize;
    }
    else if (key === 'a') {
      blobPositionX = blobPositionX - blobBeginningSize;
    }
    else if (key ==='f') {
      state = 2;
    }
  }
}

function statePicker () {
  if (state === 1){
    blobWidth = blobBeginningSize
  }
  else if (state === 2) {
    blobWidth = blobBeginningSize + blobBeginningSize;
  }
}