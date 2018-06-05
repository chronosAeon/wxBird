import {Sprite} from "../../js/base/Sprite.js"
export class BackGround extends Sprite{
  constructor()
  {
    const image = Sprite.getImage('background');
    // console.log(image)
    let info = wx.getSystemInfoSync()
    super(image, 0, 0, image.width, image.height, 0, 0, info.windowWidth, info.windowHeight);
  }
}