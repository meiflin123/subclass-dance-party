var makeSlideDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = MakeDancer.call(this, top, left, timeBetweenSteps);
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.movingRight = true;
  this.position = 0;
  makeDancer.call(this, timeBetweenSteps);

  // debugger;
  // console.log('Object: ' + makeDancer.call(this, top, left, timeBetweenSteps));
  // var invoker = function () {
  //   return makeDancer.call(this, top, left, timeBetweenSteps).$node;
  // };
  // return function () {
  //   return new invoker();
  // };
  // this.$node = invoker.$node;
  // this.$node.addClass('slideDancer');
  this.$node = $('<span class="dancer slideDancer"></span>');
  this.cssColours = [ 'AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet',"Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
  this.arrayIndex = Math.round(146 * Math.random());
  this.colourChoice = this.cssColours[this.arrayIndex];
  var styleSettings = {
    'border-color': this.colourChoice
  };
  this.$node.css(styleSettings);
  this.setPosition(this.top, this.left);


  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // Won't this refer to MakeBlinkyDancer.step rather than MakeDancer.step?
  // this.oldStep = this.blinkyDancer.step;
  // this.setPosition(top, left);
  // this.step(timeBetweenSteps);

};

makeSlideDancer.prototype = Object.create(makeDancer.prototype);

makeSlideDancer.prototype.step = function(timeBetweenSteps) {
  
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  // this.$node.toggle();
  // this.$node.animate({ "left": "-=5px" }, "slow" );
  // this.setPosition(top, left);
  if (this.movingRight) {
    this.position += 50;
  } else {
    this.position -= 50;
  }
  var styleSettings = {
    top: this.top + this.position,
    left: this.left + this.position
  };
  this.$node.css(styleSettings);

  this.movingRight = this.movingRight ? false : true;
};