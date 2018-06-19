var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = MakeDancer.call(this, top, left, timeBetweenSteps);
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer bouncyDancer"></span>');
  this.bigger = true;
  this.size = 0;
  // debugger;
  makeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // Won't this refer to MakeBlinkyDancer.step rather than MakeDancer.step?
  // this.oldStep = this.blinkyDancer.step;
  // this.setPosition(top, left);
  // this.step(timeBetweenSteps);

};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);

makeBouncyDancer.prototype.step = function(timeBetweenSteps) {
  
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  // this.$node.toggle();
  // this.$node.effect('bounce');
  //, {distance: 40});
  if (this.bigger) {
    this.size += 50;
  } else {
    this.size -= 50;
  }
  var styleSettings = {
    'border-radius': this.size
  };
  this.$node.css(styleSettings);

  this.bigger = this.bigger ? false : true;

};