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
  var left = $("#player").css("left");
  top = getCssPxValue(top) - move;
  left = getCssPxValue(left);
  if (top >= topBorder && !positionIsUsed(top, left)) {
    $("#player").css("top", top + "px");
  }
}

function moveRight () {
  var top = $("#player").css("top");
  var left = $("#player").css("left");
  top = getCssPxValue(top);
  left = getCssPxValue(left) + move;
  if ((left + playerWidth) <= rightBorder && !positionIsUsed(top, left)) {
    $("#player").css("left", left + "px");
  }
}

function moveDown () {
  var top = $("#player").css("top");
  var left = $("#player").css("left");
  top = getCssPxValue(top) + move;
  left = getCssPxValue(left);;
  if ((top + playerHeight) <= bottomBorder && !positionIsUsed(top, left)) {
    $("#player").css("top", top + "px");
  }
}

function moveLeft () {
  var top = $("#player").css("top");
  var left = $("#player").css("left");
  top = getCssPxValue(top);
  left = getCssPxValue(left) - move;
  if (left >= leftBorder && !positionIsUsed(top, left)) {
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

function positionIsUsed (top, left) {
  var position;
  var used = false;
  $("#gameField .wall").each(function (index, wall) {
    position = $(wall).position();
    if (position.top == top && position.left == left) {
      used = true;
    }
  });
  return used;
}
