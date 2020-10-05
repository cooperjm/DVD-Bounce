let x = 0;
let y = 200;
let speed = 2;
let speedY = 2;
let img;

function preload() {
  img = loadImage("dvdlogo-04.svg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  //ellipse(x, y, 100, 100);
  image(img, x, y, 150, 75);

  if (x > width - 75) {
    speed = -2;
  }

  if (x < 75) {
    speed = 2;
  }

  if (y > height - 40) {
    speedY = -2;
  }

  if (y < 40) {
    speedY = 2;
  }

  x += speed;

  y += speedY;
}