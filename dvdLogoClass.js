// Logo class, takes x and y as arguments
class DvdLogo {
  constructor(posX, posY, _sound) {
    this.x = posX;
    this.y = posY;
    this.initSpeed_X = 2;
    this.initSpeed_Y = 3;
    this.speed_X = this.initSpeed_X;
    this.speed_Y = this.initSpeed_Y;
    this.img = loadImage("dvdlogo-04.svg");
    this.imgWidth = 150;
    this.imgHeight = 75;
    this.sound = _sound;
  }

  move() {
    // Sets the bounce boundary for X-axis
    if (this.x > width - this.imgWidth / 2) {
      this.speed_X = -this.initSpeed_X;
      this.playBoop();
    } else if (this.x < this.imgWidth / 2) {
      this.speed_X = this.initSpeed_X;
      this.playBoop();
    }

    // Sets the bounce boundary for Y-axis
    if (this.y + this.imgHeight / 2 > height) {
      this.speed_Y = -this.initSpeed_Y;
      this.playBoop();
    } else if (this.y <= this.imgHeight / 2) {
      this.speed_Y = this.initSpeed_Y;
      this.playBoop();
    }

    // Changes x and y coordinates changing the logos position on the screen
    this.x += this.speed_X;
    this.y += this.speed_Y;
  }

  // Puts the image on the canvas
  show() {
    image(this.img, this.x, this.y, this.imgWidth, this.imgHeight);
  }

  playBoop() {
    this.sound.play();
  }
}
