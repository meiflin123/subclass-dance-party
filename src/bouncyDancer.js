var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = MakeDancer.call(this, top, left, timeBetweenSteps);
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.bigger = true;
  this.size = 0;
  // debugger;
  makeDancer.call(this, timeBetweenSteps);

  // this.$node = $('<span class="dancer bouncyDancer"></span>');


  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // Won't this refer to MakeBlinkyDancer.step rather than MakeDancer.step?
  // this.oldStep = this.blinkyDancer.step;
  // this.setPosition(top, left);
  // this.step(timeBetweenSteps);

  this.$node = $('<span class="dancer slideDancer"></span>');
  this.cssColours = [ 'AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet',"Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
  this.arrayIndex = Math.round(146 * Math.random());
  this.colourChoice = this.cssColours[this.arrayIndex];
  var styleSettings = {
    'border-color': this.colourChoice
  };
  this.$node.css(styleSettings);
  this.setPosition(this.top, this.left);

};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);

makeBouncyDancer.prototype.step = function(timeBetweenSteps, lineUp) {
  
  makeDancer.prototype.step.call(this, timeBetweenSteps, lineUp);
  // this.$node.toggle();
  // this.$node.effect('bounce');
  //, {distance: 40});
  if (this.bigger) {
    this.size += 50;
  } else {
    this.size -= 50;
  }
  var styleSettings = {
    'min-width': this.size,
    'min-height': this.size
  };
  this.$node.css(styleSettings);

  if (this.size >= 200) {
    this.bigger = false;
  }
  if (this.size <= 50) {
    this.bigger = true;
  }

};