let dvd;
let dvd2;

// To hold live values of browser window dimensions
let portal = {
  w: null,
  h: null,
}

// Load up the initial window size
function preload() {
  size();
}

// Setting up the canvas with the images and window dimensions
function setup() {
  imageMode(CENTER);
  createCanvas(portal.w, portal.h);
  dvd = new DvdLogo(100, 100);
  dvd2 = new DvdLogo(windowWidth - 100, windowHeight - 100);
}

// Logic for the logo/logos and canvas dimensions
function draw() {
  size();
  createCanvas(portal.w, portal.h);
  background(0);
  dvd.show();
  dvd.move();
  dvd2.show();
  dvd2.move();
}

// Fetches dimensons of browser window into portal object
// This is to live adjust the canvas size
function size() {
  portal.w = windowWidth;
  portal.h = windowHeight;
}