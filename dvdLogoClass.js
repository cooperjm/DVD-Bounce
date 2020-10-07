// Logo class, takes x and y as arguments
class DvdLogo {
  constructor(posX, posY) {
    this.x = posX;
    this.y = posY;
    this.speed_X = 2;
    this.speed_Y = 3;
    this.img = loadImage("dvdlogo-04.svg");
    this.imgWidth = 150;
    this.imgHeight = 75;
  }

  // Reverses direction when logo gets close to boundries of window
  move() {
    if (this.x + 75 >= width || this.x <= 75) {
      this.speed_X *= -1;
    }

    if (this.y + 40 >= height || this.y <= 40) {
      this.speed_Y *= -1;
    }
    this.x += this.speed_X;
    this.y += this.speed_Y;
  }

  // Puts the image on the canvas
  show() {
    image(this.img, this.x, this.y, this.imgWidth, this.imgHeight);
  }
}
