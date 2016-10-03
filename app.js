$(document).ready(function () {
  console.log('The DOM is ready!');
  var redCount = 0;
  var yellowCount = 0;
  var greenCount = 0;
  var blueCount = 0;
  var $appendCube = function () { $('.container').append('<div id="color-cube"></div>');
};
  $('button').on('click', function () {
    if ($('button').data('color') == 'red') {
      redCount++;
      $appendCube;
      $('.color-cube'
      console.log(redCount);
    }
  });
});
