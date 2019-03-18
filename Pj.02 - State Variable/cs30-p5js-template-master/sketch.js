// The Blob
// Sebastian Favel-Delorme
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state;
let blobBeginningSize; // This is the beginning size that the square would be
let blobPositionX, blobPositionY; // This dictates where "the blob" will begin and fit around its size
let blobWidth, blobHeight; // these are how big "the blob" actually is (located in the state picker)


function setup() {
  createCanvas(windowWidth, windowHeight);
  blobBeginningSize = windowWidth / 20;
  blobPositionY = windowHeight - blobBeginningSize
  blobPositionX = 0;
  state = 1;
  blobHeight = blobBeginningSize;
  blobWidth = blobBeginningSize;
  statePicker();
}

function draw() {
  background(220);
  rect(blobPositionX, blobPositionY, blobWidth, blobHeight);
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
      state = state + 1;
      statePicker();
    }
  }
}

function statePicker () {
  if (state === 1) {
    blobWidth = blobBeginningSize;
    blobHeight = blobBeginningSize;
    blobPositionX = blobPositionX;
    blobPositionY = windowHeight - blobBeginningSize;
  }
  else if (state === 2) {
    blobWidth = blobWidth + blobBeginningSize;
  }
  else if (state === 3) {
    blobHeight = blobHeight + blobBeginningSize;
    blobPositionY = windowHeight - (2*blobBeginningSize); // need to add this because Y position is in top left corner
  }
  else if (state === 4) {
    blobWidth = blobWidth + (2*blobBeginningSize);
  }
  else if (state === 5) {
    blobHeight = blobHeight + (2*blobBeginningSize);
    blobPositionY =  windowHeight - (4*blobBeginningSize);
  }
  else if (state === 6) {
    state = 0
  }
}