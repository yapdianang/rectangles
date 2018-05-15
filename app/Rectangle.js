function collision($rect1, $rect2) {
  var x1 = $rect1.offset().left;
  var y1 = $rect1.offset().top;
  var h1 = $rect1.outerHeight(true);
  var w1 = $rect1.outerWidth(true);
  var b1 = y1 + h1;
  var r1 = x1 + w1;
  var x2 = $rect2.offset().left;
  var y2 = $rect2.offset().top;
  var h2 = $rect2.outerHeight(true);
  var w2 = $rect2.outerWidth(true);
  var b2 = y2 + h2;
  var r2 = x2 + w2;

  if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
  return true;
}

function distance($rect1, $rect2){
  var x1 = $rect1.offset().left;
  var y1 = $rect1.offset().top;
  var h1 = $rect1.outerHeight(true);
  var w1 = $rect1.outerWidth(true);
  var rect1x = x1 + 0.5 * w1;
  var rect1y = y1 + 0.5 * h1;
  var x2 = $rect2.offset().left;
  var y2 = $rect2.offset().top;
  var h2 = $rect2.outerHeight(true);
  var w2 = $rect2.outerWidth(true);
  var rect2x = x2 + 0.5 * w2;
  var rect2y = y2 + 0.5 * h2;
  // returns L2 distance
  return Math.sqrt((rect2x - rect1x) * (rect2x - rect1x) + (rect2y - rect1y) * (rect2y - rect1y));
}

// Functions to provide data between rectangles, and whether collision has occured
window.setInterval(function() {
  var bool = collision($('#rect1'), $('#rect2'));
  if (bool){
    $('#result').text(bool).css('color', 'red');
  } else {
    $('#result').text(bool).css('color', 'yellow');
  }

  $('#car1Distance').text(distance($('#rect1'), $('#rect2')));

}, 30);


// Anonymous function for the two rectangles to be resizable and draggable
$(function(){
  $('#rect1,#rect2')
    .draggable()
    .resizable();
});

