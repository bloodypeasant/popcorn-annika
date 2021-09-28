import { Actor } from "./actors/actor.js";

export class View {
  constructor(app) {
    console.log(" constructing View");
    this.app = app;
    this.can = undefined;
    this.context = undefined;
  }
  finalize() {
    console.log(" finalizing View");
  }
  initialize() {
    console.log(" initializing View");
    this.can = document.getElementById("can");
    this.context = this.can.getContext("2d");
    Actor.setContext(this.context);
    this.actors = this.app.model.actors;
    window.onresize = this.resize.bind(this);
    this.resize();
  }
  resize() {
    this.can.width = window.innerWidth;
    this.can.height = window.innerHeight;
    Actor.setScreenSize(this.can.width, this.can.height);
  }
  run() {
    // console.log(" running View");
    this.context.clearRect(0, 0, this.can.width, this.can.height);
    this.actors.dial.draw();
    this.actors.stove.draw();
    this.actors.lid.draw();
    this.actors.pot.draw();
    this.actors.temp.draw();
    for (let i = 0; i < 1000; i++) {
      this.actors.popcorns[i].draw();
    }
  }
}
