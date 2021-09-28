import { Actor } from "./actor.js";

const FLAME_INTERVAL = 100;

export class Flame extends Actor {
  constructor() {
    super(0.59, 0.925, 0, 0.78, 0.1);
    console.log("     constructing Flame");
    this.images = [
      new Image(),
      new Image(),
      new Image(),
      new Image(),
      new Image(),
    ];
    this.images[0].src = "./media/images/flame-0.png";
    this.images[1].src = "./media/images/flame-1.png";
    this.images[2].src = "./media/images/flame-2.png";
    this.images[3].src = "./media/images/flame-3.png";
    this.images[4].src = "./media/images/flame-4.png";
    this.img = this.images[0];
    this.imgIndex = 0;
    this.numImages = 5;
    setInterval(() => {
      this.imgIndex++;
      if (this.imgIndex === this.numImages) {
        this.imgIndex = 0;
      }
      this.img = this.images[this.imgIndex];
    }, FLAME_INTERVAL);
  }
}
