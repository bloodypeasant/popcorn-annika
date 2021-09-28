import { Actor } from "./actor.js";

export class Burner extends Actor {
  constructor() {
    super(0.59, 0.975, 0, 0.78, 0.05);
    console.log("     constructing Burner");
    this.img = new Image();
    this.img.src = "./media/images/burner.png";
    console.log(this.test);
  }
}
