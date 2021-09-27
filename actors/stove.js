import { Burner } from "./burner.js";
import { Flame } from "./flame.js";

export class Stove {
  constructor() {
    console.log("   constructing Stove");
    this.flame = new Flame();
    this.burner = new Burner();
  }
  draw() {
    // console.log("   drawing Stove");
    this.burner.draw();
    this.flame.draw();
  }
}