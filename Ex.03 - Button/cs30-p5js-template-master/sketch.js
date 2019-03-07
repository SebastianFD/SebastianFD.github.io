// Button Demo 
// Sebastian Favel-Delorme 
// Date March 7, 2019

let state;
let buttonX, buttonY, buttonWidth, buttonHeight;
let ballX, ballY, ballRadius, dx, dy;

function setup() {
  createCanvas(windowWidth, windowHeight);
  state = "menu";
  buttonX = width/2;
  buttonY = height/2;
  buttonWidth = 100;
  buttonHeight = 50;
  ballX = width/2;
  ballY = height/2;
  ballRadius = 50;
  dx = random(3, 10)
  dy = random(3, 10)
}

function draw() {
  background(220);
  if (state === "menu") {
    displayMenu();
  }
  if (state === "ballBounce") {
    bounceTheBall();
  }
}

function bounceTheBall() {

  ballX += dx;
  ballY += dy;

  if (ballX <= 0 + ballRadius || ballX >= width - ballRadius){
    dx *= -1;
  }
  if (ballY <= 0 + ballRadius || ballY >= width - ballRadius){
    dy *= -1;
  }

  fill(255);
  ellipse(ballX, ballY, ballRadius*2, ballRadius*2)
}

function displayMenu() {
  rectMode(CENTER); // makes the rectangle point the center
  rect(buttonX, buttonY, buttonWidth, buttonHeight);
}

function mousePressed() {
  if (state === "menu"){
    if (clickedOnButton(mouseX, mouseY)) {
      state = "ballBounce";
    }
  }
}

function clickedOnButton(x,y){
  return x >= buttonX - buttonWidth/2 &&
         x <= buttonX + buttonWidth/2 &&
         y >= buttonY - buttonHeight/2 &&
         y <= buttonY + buttonHeight/2;
          
}
