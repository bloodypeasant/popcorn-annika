import { Dial } from "./actors/dial.js";
import { Stove } from "./actors/stove.js";
import { Lid } from "./actors/lid.js";
import { Popcorn } from "./actors/popcorn.js";
import { Pot } from "./actors/pot.js";
import { Temp } from "./actors/temp.js";

export class Model {
  constructor(app) {
    console.log(" constructing Model");
    Popcorn.setModel(this);
    this.app = app;
    this.temperature = document.getElementById("temperature");
    this.actors = {
      stove: new Stove(),
      dial: new Dial(),
      lid: new Lid(),
      popcorns: [],
      pot: new Pot(),
      temp: new Temp(),
    };
    for (let i = 0; i < 200; i++) {
      this.actors.popcorns.push(new Popcorn());
    }
  }
  finalize() {
    console.log(" finalizing Model");
  }
  initialize() {
    console.log(" initializing Model");
    this.temperature.innerHTML = "";
  }
  run(timeChange) {
    // console.log(" running Model");
    for (let i = 0; i < 200; i++) {
      this.actors.popcorns[i].update(timeChange);
    }
  }
}
