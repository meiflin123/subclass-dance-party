$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
  
    // make a dancer with a random position

    // do we need to add the 'new' keyword here?
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);    
    $('body').append(dancer.$node);
  });

  $('.makeLineUp').on('click', function(event) {
    // debugger;
    var numItems = dancers.length;
    for (var i = 0; i < dancers.length; i++) {
      dancers[i].makeLine();
    }
  });

  $(document).on('click', '.dancer', function(event) {
    var styleSettings = {
      'border-color': 'pink'
    };
    $(this).css(styleSettings);
  });
  //debugger;
  var interactions = function () {
    if (dancers.length >= 2) {
      for (var i = 0; i < dancers.length; i++) {
        var origin = dancers[i];
        for (var j = 0; j < dancers.length; j++) {
          var comparison = dancers[j];
          if (origin !== comparison) {
            var distance = distanceCalc(origin, comparison);
            if (distance <= 100) {
              console.log('hereeeee');
              var styleSettings = {
                'border-color': 'black'
              };
              origin.$node.css(styleSettings);
              comparison.$node.css(styleSettings);
            }
          }
        }
      } 
    }
    setTimeout(interactions, 100); 
  };
  interactions();

  var distanceCalc = function (origin, comparison) {
    var topDistance = origin.top - comparison.top;
    var leftDistance = origin.left - comparison.left;
    var distance = Math.sqrt((Math.pow(topDistance, 2) + Math.pow(leftDistance, 2)));
    return distance;
  };

});

