export class Controller {
  constructor(app) {
    console.log(" constructing Controller");
    this.app = app;
  }
  finalize() {
    console.log(" finalizing Controller");
  }
  initialize() {
    console.log(" initializing Controller");
  }
  run() {
    // console.log(" running Controller");
  }
}