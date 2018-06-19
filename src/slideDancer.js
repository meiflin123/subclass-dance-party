var makeSlideDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = MakeDancer.call(this, top, left, timeBetweenSteps);
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer slideDancer"></span>');
  this.movingRight = true;
  this.position = 0;
  // debugger;
  makeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // Won't this refer to MakeBlinkyDancer.step rather than MakeDancer.step?
  // this.oldStep = this.blinkyDancer.step;
  // this.setPosition(top, left);
  // this.step(timeBetweenSteps);

};

makeSlideDancer.prototype = Object.create(makeDancer.prototype);

makeSlideDancer.prototype.step = function(timeBetweenSteps, top, left) {
  
  makeDancer.prototype.step.call(this, timeBetweenSteps, top, left);
  // this.$node.toggle();
  // this.$node.animate({ "left": "-=5px" }, "slow" );
  // this.setPosition(top, left);
  if (this.movingRight) {
    this.position += 50;
  } else {
    this.position -= 50;
  }
  var styleSettings = {
    top: top + this.position,
    left: left + this.position
  };
  this.$node.css(styleSettings);

  this.movingRight = this.movingRight ? false : true;
  

};