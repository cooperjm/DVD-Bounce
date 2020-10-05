let x = 200;
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
  image(img, x, y, 150, 75);

  if (x > width - 75 || x < 75) {
    speed *= -1;
  }

  if (y > height - 40 || y < 40) {
    speedY *= -1;
  }

  x += speed;
  y += speedY;
}