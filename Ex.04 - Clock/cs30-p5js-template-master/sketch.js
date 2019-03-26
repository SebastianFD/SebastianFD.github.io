// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  if(windowHeight > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth)
  }
  angleMode(DEGREES);
}

function draw() {
  background(220);

  translate(width/2, heigh/2);
  clockSetup();
  hourTickMarks();
  minuteTickMarks();

}

function minuteTickMarks() {
  strokeCap(SQUARE);
  strokeWeight(3);

  for(let minuteMark = 0; minuteMark < 60; hourMark++){
    line(width * 0.34, 0, width * 0.42, 0)
    rotate(360 / 60);
  }
}

function hourTickMarks() {
  strokeCap(SQUARE);
  strokeWeight(10);

  for(let hourMark = 0; hourMark < 12; hourMark++){
    line(width * 0.3, 0, width * 0.4, 0)
    rotate(360 / 12);
  }



}

function clockSetup() {

  fill(255);
  strokeWeight(10);
  ellipse(0, 0, width * 0.9, height * 0.9);

  fill(0);
  strokeWeight(2);
  ellipse(0, 0, 3, 3)
}