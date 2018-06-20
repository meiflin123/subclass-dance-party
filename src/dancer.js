// Creates and returns a new dancer object that can step
var makeDancer = function(timeBetweenSteps) {
  // this = Object.create(makeDancer.prototype)
  // use jQuery to create an HTML <span> tag 
  this.$node = $('<span class="dancer"></span>');

  this.lineUp = false;
  // Do we need to pass timeBetweenSteps or is it already accessible 
  this.step(timeBetweenSteps, this.lineUp);

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  // this.setPosition(top, left);
  // this.cssColours = [ 'AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet',"Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
  // this.arrayIndex = Math.round(146 * Math.random());
  // this.colourChoice = this.cssColours[this.arrayIndex];
  // var styleSettings = {
  //   'border-color': this.colourChoice
  // };
  // this.$node.css(styleSettings);
  // return this;
};

makeDancer.prototype.step = function(timeBetweenSteps, lineUp) {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  
  // why don't we need to invoke this.step?
  // callCount++;
  // setTimeout(function(timeBetweenSteps, callCount, cb) { cb(timeBetweenSteps, callCount); }, timeBetweenSteps);
  
  if (!this.lineUp) {
    setTimeout(this.step.bind(this, timeBetweenSteps, lineUp), timeBetweenSteps);
  }
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.makeLine = function() {
  var currentDancer = this;
  this.lineUp = true;
  var styleSettings = {
    top: 500
  };
  setTimeout(function() { currentDancer.$node.css(styleSettings); }, 1000);
  // stop doing step functions
  // figure out how many items on the screen (window.dancers array.length)
  // divide screen width by number of items to find left position (viewport width and viewport height)
  // loop through items and set top position to the same number and left position to the increment found in previous step
  
};
