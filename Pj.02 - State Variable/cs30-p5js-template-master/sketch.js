// The Blob
// Sebastian Favel-Delorme
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// Variable list: //                  // Description for variables: //

let stateTheBlob;                     // State that The Blob is in
let blobBeginningSize;                // This is the beginning size that the square would be
let blobPositionX, blobPositionY;     // This dictates where "the blob" will begin and fit around its size
let blobWidth, blobHeight;            // these are how big "the blob" actually is (located in the state picker)
let stateBackground;
let foodBeginningSize;
let foodPostionX, foodPositionY;
let foodSize;
let blobTouchesFood;


// let backgroundRed, backgroundGreen, backgroundBlue; // The Currect background changer (Not working)

function preload() {
  backgroundGrass = loadImage('assets/theBlobGrassBackground.jpg');
  backgroundCity = loadImage('assets/theBlobCityBackground.jpg');
  backgroundSpace = loadImage('assets/theBlobSpaceBackground.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Stating The Blobs variable //
  blobBeginningSize = windowWidth / 20;               // The tiles that The Blob is on
  blobPositionY = windowHeight - blobBeginningSize;   // Just gets The blob to hug the bottom screen
  blobPositionX = blobBeginningSize * 5;              // The starting position
  stateTheBlob = 1;                                   // State which The Blob is in
  blobHeight = blobBeginningSize;                     // height of The Blob
  blobWidth = blobBeginningSize;                      // Width of The Blob
  stateBackground = 1;                                // The beginning for the background
  // Stating The Blobs "Food" variable //
  foodBeginningSize = windowWidth / 20;
  foodPositionY = windowHeight - foodBeginningSize / 2
  foodPostionX = foodBeginningSize *2
  foodSize = foodBeginningSize
  // Collison //
  blobTouchesFood = false;
}

function draw() {
  statePickerBackground();
  rect(blobPositionX, blobPositionY, blobWidth, blobHeight); // Just edits The Blob with variables (see variable list)
  foodForBlob()
}

// Controls (For now): //
// =A= Moves The Blob to the left
// =D= Moves The Blob to the Right
// =F= "Feeds" The Blob

// logic for the controls: //
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
    else if (blobTouchesFood = true) {
      stateTheBlob = stateTheBlob + 1;
      statePickerBlob();
    }
  }
}

// logic for the state The Blob is in: //
function statePickerBlob() {
  if (stateTheBlob === 1) {                                // The beginning size + base size of The Blob
    stateBackground = stateBackground + 1
    blobWidth = blobBeginningSize;
    blobHeight = blobBeginningSize;
    blobPositionX = blobPositionX;
    blobPositionY = windowHeight - blobBeginningSize;
  }
  else if (stateTheBlob === 2) {                           // The blob grows to the right
    blobWidth = blobWidth + blobBeginningSize;
  }
  else if (stateTheBlob === 3) {                           // The blob grows upward
    blobHeight = blobHeight + blobBeginningSize;
    blobPositionY = windowHeight - (2*blobBeginningSize);  // need to add this because Y position is in top left corner
  }
  else if (stateTheBlob === 4) {                           // Grows to the right again
    blobWidth = blobWidth + (2*blobBeginningSize);
  }
  else if (stateTheBlob === 5) {                           // Grows upward again
    blobHeight = blobHeight + (2*blobBeginningSize);
    blobPositionY =  windowHeight - (4*blobBeginningSize);
  }
  else if (stateTheBlob === 6) {                           // Sets The blob at basically state 1 again
    stateTheBlob = 0;
  }
}

// logic for the state the background is in: //
function statePickerBackground() {
  if (stateBackground === 1) {
    background(backgroundGrass);
  }
  else if (stateBackground === 2) {
    background(backgroundCity);
  }
  else if (stateBackground === 3) {
    background(backgroundSpace);
  }
}

function foodForBlob() {
  ellipse(foodBeginningSize, foodPositionY, foodSize)
}