import { ResourceLoader } from "/base/ResourceLoader.js"
import { Director } from "Director.js"
import { BackGround } from "/runtime/backGround.js"
import { DataStore } from "/base/DataStore.js"
import { Land } from "/runtime/Land.js"
import { Birds } from "./player/Birds.js"
import {StartButton} from "./player/StartButton.js"
import {Score} from "./player/Score.js"
export class Main {
  constructor() {
    this.canvas = wx.createCanvas();
    this.ctx = this.canvas.getContext('2d');
    this.dataStore = DataStore.getInstance();
    this.director = Director.getInstance();
    const loader = ResourceLoader.create();
    loader.onLoaded(map => this.onResourceFirstLoaded(map))

  }

  onResourceFirstLoaded(map) {
    this.dataStore.ctx = this.ctx;
    this.dataStore.res = map;
    // this.createBackgroundMusic();
    this.init();
  }

  init() {
    this.director.isGameOver = false;
    this.dataStore.put('pencils', []).put('background', BackGround).put('land', Land).put('birds', Birds).put('startButton',StartButton)
    .put('score',Score)
    this.registerEvent();
    this.director.createPencil();
    this.director.run()
  }

  createBackgroundMusic(){
    const bgm = wx.createInnerAudioContext();
    bgm.loop = true;
    bgm.autoplay = true;
    bgm.src = 'audios/bgm.mp3';
  }

  registerEvent(){
    wx.onTouchStart((e)=>{
      if (this.director.isGameOver)
      {
        console.log('游戏开始');
        this.init();
      }
      else{
        this.director.birdsEvent();
      }
    });
  }
}