import { Resource } from "./Resource.js"
export class ResourceLoader {
  constructor() {
    this.map = new Map(Resource);
    for (let [key, value] of this.map) {
      const image = wx.createImage();
      image.src = value;
      this.map.set(key, image);
    }
  }
  onLoaded(callback) {
    let loadedCount = 0;
    for (let value of this.map.values()) {
      value.onload = () => {
        loadedCount++;
        if (loadedCount >= this.map.size) {
          callback(this.map)
        }
      }
    }
  }
  static create(){
    return new ResourceLoader();
  }
}