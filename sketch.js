let dvd;
let dvd2;


let portal = {
  w: null,
  h: null,
}


function preload() {
  size();
}

function setup() {
  imageMode(CENTER);
  createCanvas(portal.w, portal.h);
  dvd = new DvdLogo(100, 100);
  dvd2 = new DvdLogo(windowWidth - 100, windowHeight - 100);
}

function draw() {
  size();
  createCanvas(portal.w, portal.h);
  background(0);
  dvd.show();
  dvd.move();
  dvd2.show();
  dvd2.move();
}

// Logo class, takes x and y as arguments
class DvdLogo {
  constructor(posX, posY) {
    this.x = posX;
    this.y = posY;
    this.w = 150;
    this.h = 75;
    this.speed_X = 2;
    this.speed_Y = 3;
    this.img = loadImage("dvdlogo-04.svg");
    this.imgWidth = 150;
    this.imgHeight = 75;
  }

  // Reverses direction when logo gets close to boundries of window
  move() {
    if (this.x >= width - 75 || this.x <= 75) {
      this.speed_X *= -1;
    }
    if (this.y >= height - 40 || this.y <= 40) {
      this.speed_Y *= -1;
    }
    this.x += this.speed_X;
    this.y += this.speed_Y;
  }

  // Puts the image on the canvas
  show() {
    image(this.img, this.x, this.y, this.w, this.h);
  }


}

// Fetches dimensons of browser window into portal object
// This is to live adjust the canvas size
function size() {
  portal.w = windowWidth;
  portal.h = windowHeight;
}