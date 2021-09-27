let context = undefined;
let screenWidth = undefined;
let screenHeight = undefined;

const G = 0.00000045;

export class Actor {
  constructor(posX, posY, dimX, dimY, velX = 0, velY = 0) {
    console.log("   Constructing Actor");
    this.pos = {
      x: posX,
      y: posY,
    };
    this.dim = {
      x: dimX,
      y: dimY,
    };
    this.vel = {
      x: velX,
      y: velY,
    };
  }
  static setContext(con) {
    context = con;
  }
  static setScreenSize(screenDimX, screenDimY) {
    screenWidth = screenDimX;
    screenHeight = screenDimY;
  }
  draw() {
    context.translate(this.pos.x * screenWidth, this.pos.y * screenHeight);
    context.drawImage(
      this.img,
      -0.5 * this.dim.x * screenWidth,
      -0.5 * this.dim.y * screenHeight,
      this.dim.x * screenWidth,
      this.dim.y * screenHeight
    );
    context.translate(-this.pos.x * screenWidth, -this.pos.y * screenHeight);
  }
  getContext() {
    return context;
  }
  getScreenWidth() {
    return screenWidth;
  }
  getScreenHeight() {
    return screenHeight;
  }
  update(timeChange) {
    this.vel.y += timeChange * G;
    this.pos.x += timeChange * this.vel.x;
    this.pos.y += timeChange * this.vel.y;
    if (this.pos.y > 0.878 - 0.5 * 0.018 - 0.5 * 0.06) {
      this.pos.y = 0.878 - 0.5 * 0.018 - 0.5 * 0.06;
      this.vel.y = -this.vel.y;
    }
    if (this.pos.x < 0.2 + 0.5 * 0.018 + 0.5 * 0.06) {
      this.pos.x = 0.2 + 0.5 * 0.018 + 0.5 * 0.06;
      this.vel.x = -this.vel.x;
    }
    if (this.pos.x > 0.98 - 0.5 * 0.018 - 0.5 * 0.06) {
      this.pos.x = 0.98 - 0.5 * 0.018 - 0.5 * 0.06;
      this.vel.x = -this.vel.x;
    }
    if (this.pos.y < 0.05) {
      this.pos.y = 0.05;
      this.vel.y = -this.vel.y;
    }
  }
}
