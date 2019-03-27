// Perlin Noise Demo

let time;
let rectWidth;
let myRectangle;
let rects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  let numberOfRects = width;

  time = 0;
  rectWidth = width / numberOfRects;
  generateInitialTerrain();

}

function draw() {
  background(220);
  fill(0);
  for(let i = 0; i < numberOfRects; i ++) {
    rect(rects[i].x, rects[i].y, rects[i].width, rects[i].height);
  }
}

function generateInitialTerrain() {
  for (let i = 0; i < numberOfRects; i ++)
    let rectHeight = noise(time) * height;
    let myRectangle = {
      height: rectHeight,
      width: rectWidth,
      x: i * rectWidth,
      y: height - rectHeight,
    };
    rects.push(myRectangle);
    time += 0.01;
}