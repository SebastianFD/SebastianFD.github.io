// Traffic Light Starter Code
// Dan Schellenberg
// Sept 25, 2018

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/

let timer = 10

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill(255);
  while (timer < 0) {

    if (timer >= 10 && timer < 5); {
      ellipse(width/2, height/2 - 65, 50, 50); //top
      timer = timer - 0.0001
    }
    if (timer >= 5 && timer < 1); {
      ellipse(width/2, height/2, 50, 50); //middle
      timer = timer - 0.0001
    }
    if (timer >= 1); {
      ellipse(width/2, height/2 + 65, 50, 50); //bottom
    }
  }
}