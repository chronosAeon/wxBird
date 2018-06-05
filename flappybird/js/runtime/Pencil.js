import { Sprite } from "../base/Sprite.js"
// 这个地方千万注意es6import机制不能互相import会爆出栈泄露的bug
// import {Director} from "../Director.js"
export class Pencil extends Sprite {
  constructor(image, top) {
    let info = wx.getSystemInfoSync()
    super(image,0,0,image.width,image.height,info.windowWidth,0,image.width,image.height)
    this.top = top;
    this.moveSpeed = 2;
  }

  draw(){

    this.x = this.x - this.moveSpeed;
    super.draw(this.img,0,0,this.img.width,this.img.height,this.x,this.y,this.img.width,this.img.height)
  }
}