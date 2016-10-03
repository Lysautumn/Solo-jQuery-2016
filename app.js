$(document).ready(function () {
  console.log('The DOM is ready!');
  var redCount = 0;
  var yellowCount = 0;
  var greenCount = 0;
  var blueCount = 0;
  var $appendCube = function () { $('.container').append('<div class="color-cube"></div>');
  };
  $('button').on('click', function () {
    if ($(this).data('color') == 'red') {
      redCount++;
      $appendCube();
      $('.container').children().last().addClass('red');
      $('#red').replaceWith('<p id="red">Total red: ' + redCount + '</p>');
      console.log(redCount);
    } else if ($(this).data('color') == 'yellow') {
      yellowCount++;
      $appendCube();
      $('.container').children().last().addClass('yellow');
      $('#yellow').replaceWith('<p id="yellow">Total yellow: ' + yellowCount + '</p>');
      console.log(yellowCount);
    } else if ($(this).data('color') == 'green') {
      greenCount++;
      $appendCube();
      $('.container').children().last().addClass('green');
      $('#green').replaceWith('<p id="green">Total green: ' + greenCount + '</p>');
      console.log(greenCount);
    } else if ($(this).data('color') == 'blue') {
      blueCount++;
      $appendCube();
      $('.container').children().last().addClass('blue');
      $('#blue').replaceWith('<p id="blue">Total blue: ' + blueCount + '</p>');
      console.log(blueCount);
    }
  });

});
