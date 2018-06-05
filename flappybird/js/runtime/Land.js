import { Sprite } from "../base/Sprite.js"
import {Director} from "../Director.js"
export class Land extends Sprite {
  constructor() {
    const image = Sprite.getImage('land')
    // console.log(image)
    let info = wx.getSystemInfoSync()
    super(image, 0, 0, image.width, image.height, 0, info.screenHeight - image.height, image.width, image.height);
    this.landX = 0;
    this.landSpeed = Director.getInstance().moveSpeed;
  }

  draw(){
    this.landX = this.landX + this.landSpeed;
    let info = wx.getSystemInfoSync()
    if(this.landX>(this.img.width-info.windowWidth))
    {
      this.landX = 0;
    }
    super.draw(this.img,this.srcX,this.srcY,this.srcW,this.srcH,
    -this.landX,this.y,this.width,this.height)
  }
}