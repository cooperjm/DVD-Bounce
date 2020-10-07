let logos = [];
let numberOfLogos = 1;

// Setting up the canvas with the images and window dimensions
function setup() {
  imageMode(CENTER);
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < numberOfLogos; i++) {
    logos[i] = new DvdLogo(
      random(75, windowWidth - 75),
      random(40, windowHeight - 40)
    );
  }
}

// Logic for the logo/logos and canvas dimensions
function draw() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  for (let i = 0; i < logos.length; i++) {
    logos[i].show();
    logos[i].move();
  }
}
