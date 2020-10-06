let settings = {
  x: null,
  y: null,
  w: null,
  h: null,
  speed_X: 2,
  speed_Y: 3,
  img: null
}


function preload() {
  size();
  settings.img = loadImage("dvdlogo-04.svg");
  center();

}

function setup() {
  createCanvas(settings.w, settings.h);
  imageMode(CENTER);
}

function draw() {
  size();
  createCanvas(settings.w, settings.h);
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  image(settings.img, settings.x, settings.y, 150, 75);

  if (settings.x >= width - 75 || settings.x <= 75) {
    settings.speed_X *= -1;
  }

  if (settings.y >= height - 40 || settings.y <= 40) {
    settings.speed_Y *= -1;
  }

  settings.x += settings.speed_X;
  settings.y += settings.speed_Y;
}

function center() {
  settings.x = (windowWidth / 2);
  settings.y = (windowHeight / 2);
}

function size() {
  settings.w = windowWidth;
  settings.h = windowHeight;
}