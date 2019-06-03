// Bubble Sort

let theNumbers = [5, 15, 3, 8, 9, 1, 20, 7];

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(bubbleSort(theNumbers));
}

function draw() {
  background(220);
}

function bubbleSort (someArray) {
  n = someArray.length
  swapRequired = true;

  
  while (swapRequired) {
    for (let i = 0; i < n - 1; i++) {
      if (someArray[i] > someArray[i + 1]) {
        let temp = someArray[i];
      }
    }
  }
}
