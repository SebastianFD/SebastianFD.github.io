// Interactive Scene
// Sebastian Favel-Delorme
// Feb 14, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

i = 1
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  //let BlueCircle = ellipse(random(width), random(height), 50, 50);
while (i <= 5) {
  ellipse(random(width), random(height), 50, 50);
  let i = i + 1
  }
}

function draw() {
  //ellipse(mouseX, mouseY, 50, 50);
}
