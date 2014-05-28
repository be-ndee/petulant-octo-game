/**
 * the moveDirection functions:
 * moves the player move-px's into the given direction
 */
var move = 10;
function moveUp () {
  var top = $("#player").css("top");
  top = getCssPxValue(top) - move;
  $("#player").css("top", top + "px");
}

function moveRight () {
  var left = $("#player").css("left");
  left = getCssPxValue(left) + move;
  $("#player").css("left", left + "px");
}

function moveDown () {
  var top = $("#player").css("top");
  top = getCssPxValue(top) + move;
  $("#player").css("top", top + "px");
}

function moveLeft () {
  var left = $("#player").css("left");
  left = getCssPxValue(left) - move;
  $("#player").css("left", left + "px");
}

// the int will be returned from a css-px-value
function getCssPxValue (str) {
  var int = str.substr(0, str.length - 2);
  return parseInt(int);
}
