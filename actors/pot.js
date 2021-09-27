import { Actor } from "./actor.js";

export class Pot extends Actor {
  constructor() {
    super();
    console.log("   constructing Pot");
  }
  draw() {
    // console.log("   drawing Pot");
    let ctx = this.getContext();
    ctx.beginPath();
    ctx.lineWidth = 0.015 * this.getScreenWidth();
    ctx.strokeStyle = "black";
    ctx.moveTo(
      0.2 * this.getScreenWidth() + 0.5 * ctx.lineWidth,
      0.05 * this.getScreenHeight()
    );
    ctx.lineTo(
      0.2 * this.getScreenWidth() + 0.5 * ctx.lineWidth,
      0.878 * this.getScreenHeight() - 0.5 * ctx.lineWidth
    );
    ctx.lineTo(
      0.98 * this.getScreenWidth() - 0.5 * ctx.lineWidth,
      0.878 * this.getScreenHeight() - 0.5 * ctx.lineWidth
    );
    ctx.lineTo(
      0.98 * this.getScreenWidth() - 0.5 * ctx.lineWidth,
      0.05 * this.getScreenHeight()
    );
    ctx.stroke();
  }
}
