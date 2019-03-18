// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

let hit = false;

function draw(){
	background(255);
	ellipse(200,200,50,150);
	point(mouseX,mouseY);

	hit = collidePointEllipse(mouseX,mouseY,200,200,50,150)

	print("colliding? " + hit);
}
