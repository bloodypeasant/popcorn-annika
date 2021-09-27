import { Actor } from "./actor.js";

export class Temp extends Actor {
  constructor() {
    super();
    console.log("   constructing Temp");
  }
  draw() {
    // console.log("   drawing Temp");
    let ctx = this.getContext();
    ctx.beginPath();
    ctx.lineWidth = 0.0075 * this.getScreenWidth();
    ctx.strokeStyle = "black";
    ctx.moveTo(
      0.0075 * this.getScreenWidth() + 0.5 * ctx.lineWidth,
      0.4 * this.getScreenHeight()
    );
    ctx.lineTo(
      0.0075 * this.getScreenWidth() + 0.5 * ctx.lineWidth,
      0.8 * this.getScreenHeight() - 0.5 * ctx.lineWidth
    );
    ctx.lineTo(
      0.175 * this.getScreenWidth() - 0.5 * ctx.lineWidth,
      0.8 * this.getScreenHeight() - 0.5 * ctx.lineWidth
    );
    ctx.lineTo(
      0.175 * this.getScreenWidth() - 0.5 * ctx.lineWidth,
      0.4 * this.getScreenHeight()
    );
    ctx.lineTo(0.0075 * this.getScreenWidth(), 0.4 * this.getScreenHeight());
    ctx.stroke();
  }
}
