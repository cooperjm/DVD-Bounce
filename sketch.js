let logos = [];
let numberOfLogos = 1;
let img;

function preload() {
  // img = loadImage("dvdlogo-04.svg");
  img = loadImage("dvdVideo.png");
}

// Setting up the canvas with the images and window dimensions
function setup() {
  imageMode(CENTER);
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < numberOfLogos; i++) {
    logos[i] = new DvdLogo(random(windowWidth), random(windowHeight), img);
  }
}

// Draws the canvas and the logos on the canvas
function draw() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  for (let i = 0; i < logos.length; i++) {
    logos[i].show();
    logos[i].move();
  }
}
