/**
 * the moveDirection functions:
 * moves the player move-px's into the given direction
 */
// move-step
var move = 10;
// border of gameField
var topBorder = 0;
var rightBorder = $("#gameField").width();
var bottomBorder = $("#gameField").height();
var leftBorder = 0;
// size of player
var playerWidth = $("#player").width();
var playerHeight = $("#player").height();

function moveUp () {
  var top = $("#player").css("top");
  top = getCssPxValue(top) - move;
  if (top >= topBorder) {
    $("#player").css("top", top + "px");
  }
}

function moveRight () {
  var left = $("#player").css("left");
  left = getCssPxValue(left) + move;
  if ((left + playerWidth) <= rightBorder) {
    $("#player").css("left", left + "px");
  }
}

function moveDown () {
  var top = $("#player").css("top");
  top = getCssPxValue(top) + move;
  if ((top + playerHeight) <= bottomBorder) {
    $("#player").css("top", top + "px");
  }
}

function moveLeft () {
  var left = $("#player").css("left");
  left = getCssPxValue(left) - move;
  if (left >= leftBorder) {
    $("#player").css("left", left + "px");
  }
}

// the int will be returned from a css-px-value
function getCssPxValue (str) {
  var int = str.substr(0, str.length - 2);
  return parseInt(int);
}

// when a key is down, choose the correct move-function if it is an arrow-key
$(document).keydown( function (event) {
  switch (event.keyCode) {
    case 37:
      moveLeft();
      break;
    case 38:
      moveUp();
      break;
    case 39:
      moveRight();
      break;
    case 40:
      moveDown();
      break;
  }
});
