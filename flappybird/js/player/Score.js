import { DataStore } from "../base/DataStore.js"
export class Score {
  constructor() {
    this.ctx = DataStore.getInstance().ctx;
    this.scoreNumber = 0;
    this.isScore = true;
  }
  draw(){
    let info = wx.getSystemInfoSync();
    this.ctx.font = '25px Arial';
    this.ctx.fillStyle = '#ffcbeb';
    this.ctx.fillText(
      this.scoreNumber,
      info.windowWidth/2,
      info.windowHeight/18,
      1000
    )
  }
}