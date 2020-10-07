let dvd;
let dvd2;

// Setting up the canvas with the images and window dimensions
function setup() {
  imageMode(CENTER);
  createCanvas(windowWidth, windowHeight);
  dvd = new DvdLogo(100, 100);
  dvd2 = new DvdLogo(windowWidth - 100, windowHeight - 100);
}

// Logic for the logo/logos and canvas dimensions
function draw() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  dvd.show();
  dvd.move();
  dvd2.show();
  dvd2.move();
}
