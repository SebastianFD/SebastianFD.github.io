// The Blob
// Sebastian Favel-Delorme
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let stateTheBlob;
let blobBeginningSize; // This is the beginning size that the square would be
let blobPositionX, blobPositionY; // This dictates where "the blob" will begin and fit around its size
let blobWidth, blobHeight; // these are how big "the blob" actually is (located in the state picker)
let backgroundStage;
let backgroundRed, backgroundGreen, backgroundBlue; // The Currect background changer

function setup() {
  createCanvas(windowWidth, windowHeight);
  blobBeginningSize = windowWidth / 20;
  blobPositionY = windowHeight - blobBeginningSize
  blobPositionX = 0;
  stateTheBlob = 1;
  blobHeight = blobBeginningSize;
  blobWidth = blobBeginningSize;
  stateBackground = 1
}

function draw() {
  background(backgroundRed, backgroundGreen, backgroundBlue);
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
      stateTheBlob = stateTheBlob + 1;
      statePickerBlob();
    }
  }
}

function statePickerBlob() {
  if (stateTheBlob === 1) { // The beginning size + base size of The Blob
    blobWidth = blobBeginningSize;
    blobHeight = blobBeginningSize;
    blobPositionX = blobPositionX;
    blobPositionY = windowHeight - blobBeginningSize;
  }
  else if (stateTheBlob === 2) { // The blob grows to the right
    blobWidth = blobWidth + blobBeginningSize;
  }
  else if (stateTheBlob === 3) { // The blob grows upward
    blobHeight = blobHeight + blobBeginningSize;
    blobPositionY = windowHeight - (2*blobBeginningSize); // need to add this because Y position is in top left corner
  }
  else if (stateTheBlob === 4) { // Grows to the right again
    blobWidth = blobWidth + (2*blobBeginningSize);
  }
  else if (stateTheBlob === 5) { // Grows upward again
    blobHeight = blobHeight + (2*blobBeginningSize);
    blobPositionY =  windowHeight - (4*blobBeginningSize);
  }
  else if (stateTheBlob === 6) { // Sets The blob at basically state 1 again
    stateTheBlob = 0;
    stateBackground = stateBackground + 1;
    
  }
}

function statePickerBackground() {
  if (stateBackground === 1) {
    backgroundblue = 255;
  }
  else if (stateBackground === 2) {
    backgroundGreen = 255;
  }
  else if (stateBackground === 3) {
    backgroundRed = 255;
  }
}
// 128 64 32 16 8 4 2 1