import { Actor } from "./actor.js";

const G = 0.00000045;
const CORN_DIM_X_UNPOPPED = 0.02;
const CORN_DIM_Y_UNPOPPED = 0.02;
const CORN_DIM_X_POPPED = 0.06;
const CORN_DIM_Y_POPPED = 0.06;

const PAN_WIDTH = 0.765;
const PAN_HEIGHT = 0.8205;
const PAN_LEFT = 0.2075;
const PAN_TOP = 0.05;

const NUM_LANDING_ROWS = Math.ceil(PAN_HEIGHT / CORN_DIM_Y_POPPED);
const NUM_LANDING_COLS = Math.ceil((2 * PAN_WIDTH) / CORN_DIM_X_POPPED);
const ROW_SIZE = PAN_HEIGHT / NUM_LANDING_ROWS;
const COL_SIZE = PAN_WIDTH / NUM_LANDING_COLS;

let landings = [];
for (let row = 0; row < NUM_LANDING_ROWS; row++) {
  let landingRow = [];
  for (let col = 0; col < NUM_LANDING_COLS; col++) {
    landingRow.push(false);
  }
  landings.push(landingRow);
}
// console.log(landings);

let model = undefined;
// position() {
//   for (let i = 0; i < 50; i++) {
//     let posX =
//       0.2 + 0.5 * 0.018 + 0.5 * 0.02 + (0.78 - 0.018 - 0.02) * Math.random();
//     let posY = 0.847;
//   }
//   if (100 > i > 50) {
//     for (let i = 0; i < 100; i++) {
//       let posX =
//         0.2 + 0.5 * 0.018 + 0.5 * 0.02 + (0.78 - 0.018 - 0.02) * Math.random();
//       let posY = 0.847 + dimY;
//     }
//   }
//   if (150 > i > 100) {
//     for (let i = 0; i < 150; i++) {
//       let posX =
//         0.2 + 0.5 * 0.018 + 0.5 * 0.02 + (0.78 - 0.018 - 0.02) * Math.random();
//       let posY = 0.847 + 2 * dimY;
//     }
//   }
// }
// list of [{x: y:}, {x: y:}] you would need 200 of these positions
// make a for loop for them and one by one assign the positions

export class Popcorn extends Actor {
  constructor() {
    super(
      0.2 + 0.5 * 0.018 + 0.5 * 0.02 + (0.78 - 0.018 - 0.02) * Math.random(),
      0.847,
      CORN_DIM_X_UNPOPPED,
      CORN_DIM_Y_UNPOPPED
    );
    console.log("   constructing Popcorn");
    this.isPopped = false;
    this.img = new Image();
    this.img.src = "./media/images/unpopped.png";
    this.poppedImg = new Image();
    this.poppedImg.src = "./media/images/popped.png";
    setTimeout(() => {
      this.isPopped = true;
      this.img = this.poppedImg;
      this.dim.x = CORN_DIM_X_POPPED;
      this.dim.y = CORN_DIM_Y_POPPED;
      this.vel.x = -0.0008 + 0.0016 * Math.random();
      this.vel.y = -0.0008;
    }, 4000 + 9000 * Math.random());
  }
  update(timeChange) {
    this.vel.y += timeChange * G;
    this.pos.x += timeChange * this.vel.x;
    this.pos.y += timeChange * this.vel.y;
    if (this.pos.x < 0.2 + 0.5 * 0.015 + 0.5 * 0.06) {
      this.pos.x = 0.2 + 0.5 * 0.015 + 0.5 * 0.06;
      this.vel.x = -this.vel.x;
    }
    if (this.pos.x > 0.98 - 0.5 * 0.015 - 0.5 * 0.06) {
      this.pos.x = 0.98 - 0.5 * 0.015 - 0.5 * 0.06;
      this.vel.x = -this.vel.x;
    }
    if (this.pos.y < 0.05) {
      this.pos.y = 0.05;
      this.vel.y = -this.vel.y;
    }

    let leadingRow = Math.floor(
      (this.pos.y + 0.5 * this.dim.y - PAN_TOP) / ROW_SIZE
    );
    let leadingCol;
    if (this.vel.x < 0) {
      leadingCol = Math.floor(
        (this.pos.x - 0.5 * this.dim.x - PAN_LEFT) / COL_SIZE
      );
    } else {
      leadingCol = Math.floor(
        (this.pos.x + 0.5 * this.dim.x - PAN_LEFT) / COL_SIZE
      );
    }
    let centerRow = Math.floor((this.pos.y - PAN_TOP) / ROW_SIZE);
    let centerCol;
    if (this.vel.x < 0) {
      leadingCol = Math.floor((this.pos.x - PAN_LEFT) / COL_SIZE);
    } else {
      leadingCol = Math.floor((this.pos.x - PAN_LEFT) / COL_SIZE);
    }
    if (this.pos.y > 0.878 - 0.5 * 0.015 - 0.5 * 0.06) {
      this.pos.y = 0.878 - 0.5 * 0.015 - 0.5 * 0.06;
      if (this.isPopped) {
        this.vel.y = 0;
        this.vel.x = 0;
        landings[NUM_LANDING_ROWS - 1][centerCol] = true;
      }
      return;
    }
    console.log("here A");
    if (this.vel.y > 0) {
      console.log("here B");
      if (landings[leadingRow][leadingCol]) {
        if (!landings[leadingRow][centerCol]) {
          this.vel.x *= -1;
          return;
        }
        this.vel.y = 0;
        this.vel.x = 0;
        landings[centerRow][centerCol] = true;
        return;
      }
    }
  }
  static setModel(m) {
    model = m;
  }
}
