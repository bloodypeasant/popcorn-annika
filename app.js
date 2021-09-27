import { Model } from "./model.js";
import { View } from "./view.js";
import { Controller } from "./controller.js";

export class App {
  constructor() {
    console.log("constructing App");
    this.model = new Model(this);
    this.view = new View(this);
    this.controller = new Controller(this);

    window.onload = () => {
      this.initialize();
      requestAnimationFrame(this.run.bind(this));
    };
  }
  finalize() {
    console.log("finalizing App");
    this.model.finalize();
    this.view.finalize();
    this.controller.finalize();
  }
  initialize() {
    console.log("initializing App");
    this.model.initialize();
    this.view.initialize();
    this.controller.initialize();
  }
  run(timeNow) {
    console.log("running App");
    let timePrior = timeNow;
    let that = this;
    requestAnimationFrame(_run);

    function _run(timeNow) {
      let timeChange = timeNow - timePrior;
      that.controller.run();
      that.model.run(timeChange);
      that.view.run();
      timePrior = timeNow;
      requestAnimationFrame(_run);
    }
  }
}
