import { Sprite } from "../base/Sprite.js"
export class Birds extends Sprite {
  constructor() {
    let info = wx.getSystemInfoSync();
    const image = Sprite.getImage('birds');
    super(image, 0, 0, image.width, image.height, 0, 0, image.width, image.height);
    this.clippingX = [9, 9 + 34 + 18, 9 + 34 + 18 + 34 + 18]
    this.clippingY = [10, 10, 10]
    this.clippingWidth = [34, 34, 34]
    this.clippingHeight = [24, 24, 24]
    this.birdX = info.windowWidth / 4;
    this.birdY = info.windowHeight / 2;
    this.birdsX = [this.birdX, this.birdX, this.birdX];
    this.birdsY = [this.birdY, this.birdY, this.birdY];
    const birdWidth = 34;
    this.birdsWidth = [birdWidth, birdWidth, birdWidth]
    const birdHeight = 24;
    this.birdsHeight = [birdHeight, birdHeight, birdHeight]
    this.y = [this.birdY, this.birdY, this.birdY]
    this.index = 0;
    this.count = 0;
    this.time = 0;
  }
  draw() {
    const speed = 0.2;
    this.count = this.count + speed;
    if (this.index >= 2) {
      this.count = 0;
    }
    this.index = Math.floor(this.count);
    const offsetUp = 50;
    const g =0.98/5;
    const offsetY = (g*this.time*(this.time-offsetUp))/2;
    for (let i=0;i<=2;i++)
    {
      this.birdsY[i] = this.y[i]+offsetY;
    }
    this.time++;
    super.draw(
      this.img,
      this.clippingX[this.index],
      this.clippingY[this.index],
      this.clippingWidth[this.index],
      this.clippingHeight[this.index],
      this.birdsX[this.index],
      this.birdsY[this.index],
      this.birdsWidth[this.index],
      this.birdsHeight[this.index]
    )
  }
}