var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = MakeDancer.call(this, top, left, timeBetweenSteps);
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer blinkyDancer"></span>');
  debugger;
  makeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // Won't this refer to MakeBlinkyDancer.step rather than MakeDancer.step?
  // this.oldStep = this.blinkyDancer.step;
  // this.setPosition(top, left);
  // this.step(timeBetweenSteps);

};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.step = function(timeBetweenSteps) {
  
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  //this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
  // this.$node.toggle();
};