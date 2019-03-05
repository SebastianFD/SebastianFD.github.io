// Interactive Scene
// Sebastian Favel-Delorme
// Feb 14, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let i = 0; // <= *this is for the 5 circle placer*


function setup() {
  createCanvas(windowWidth, windowHeight);

// *This is a random, 5 Circle placer*
//while (i < 5) {
  //fill(random(255), random(255), random(255))
  //ellipse(random(width), random(height), 100, 100);
  //i++;
  //}


}

function draw() {
  background(220);
  
  //ellipse(mouseX, mouseY, 50, 50);


  let delay = 0.05;
  let x = 1;
  let y = 1;
  
  let targetX = mouseX;
  let directionX = targetX - x;
  x = x + directionX * delay;

  let targetY = mouseY;
  let directionY = targetY - y;
  y = y + directionY * delay;
   
ellipse(x, y, 50, 50);

}
