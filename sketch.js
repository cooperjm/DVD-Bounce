let logos = [];
let numberOfLogos = 1;
let boop;
let slider;
let txt = "Volume Off/On";

function preload() {
  soundFormats("mp3", "ogg");
  boop = loadSound("boop.mp3");
  boop.setVolume(0.05);
}

// Setting up the canvas with the images and window dimensions
function setup() {
  imageMode(CENTER);
  createCanvas(windowWidth, windowHeight);
  slider = createSlider(0, 0.2, 0, 0.2);
  slider.position(10, 10);
  slider.style("width", "30px");

  for (let i = 0; i < numberOfLogos; i++) {
    logos[i] = new DvdLogo(random(windowWidth), random(windowHeight), boop);
  }
}

// Draws the canvas and the logos on the canvas
function draw() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  boop.setVolume(slider.value());
  textSize(18);
  text(txt, 50, 13, 150, 50);
  fill(255);

  for (let i = 0; i < logos.length; i++) {
    logos[i].show();
    logos[i].move();
  }
}
