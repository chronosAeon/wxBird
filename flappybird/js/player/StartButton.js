import {Sprite} from "../base/Sprite.js"
export class StartButton extends Sprite{
  constructor(){
    let info = wx.getSystemInfoSync();
    const image = Sprite.getImage('startButton');
    super(image,0,0,image.width,image.height,(info.windowWidth-image.width)/2,(info.windowHeight-image.height)/2.5,image.width,image.height);
  }
}