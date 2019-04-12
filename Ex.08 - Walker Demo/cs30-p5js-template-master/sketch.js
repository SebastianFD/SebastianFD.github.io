// Walker OOP Demo
// Sebastian Favel-Delorme
// April 12th, 2019

class Walker {
  constructor(x, y, someColor, someSpeed) {
    this.x = x;
    this.y = y;
    this.color = someColor;
    this.speed = someSpeed;
  }
  display() {
    fill(this.color);
    stroke(this.color);
    ellipse(this.x, this.y, 2, 2);
  }
  move() {
    let choise = random(100);
    if (choise < 25) {
      //up
      this.y -= this.speed;
    }
    else if (choise < 50) {
      //down
      this.y += this.speed;
    }
    else if (choise < 75) {
      //left
      this.x -= this.speed;
    }
    else {
      //right
      this.x += this.speed;
    }
  }
}
let theWalkers = [];

// Uncomment for individual //
// let andrew;
// let kenny;
// let sebastian;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Edit i<__; for number of walkers // 
  for (let i=0; i<500; i++) {
    let someWalker = new Walker(width/2, height/2, color(random(255), random(255), random(255)), 1);
    theWalkers.push(someWalker);
  }

  // andrew = new Walker(width/2, height/2, "purple", 5);
  // kenny = new Walker(100, 100, "black", 5);
  // sebastian = new Walker(width/4, height/4, "green", 5);
}

function draw() {
  for (let i=0; i<theWalkers.length; i++) {
    theWalkers[i].move();
    theWalkers[i].display();

  }
  // andrew.move();
  // sebastian.move();
  // kenny.move();

  // andrew.display();
  // sebastian.display();
  // kenny.display();

}
