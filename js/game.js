/**
 * the moveDirection functions:
 * moves the player move-px's into the given direction
 */
// border of gameField
var topBorder = 0;
var rightBorder = $("#gameField").width();
var bottomBorder = $("#gameField").height();
var leftBorder = 0;
// size of player
var playerWidth = $("#player").width();
var playerHeight = $("#player").height();

// checks if the given position (top, left) is blocked by a wall
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

// move direction (1 - up, 2 - right, 3 - down, 4 - left)
function movePlayer (direction) {
  var top = getCssPxValue($("#player").css("top"));
  var left = getCssPxValue($("#player").css("left"));
  switch (direction) {
    case 1:
      top = top - move;
      break;
    case 2:
      left = left + move;
      break;
    case 3:
      top = top + move;
      break;
    case 4:
      left = left - move;
      break;
  }
  if (top >= topBorder
      && top <= (bottomBorder - move)
      && left >= leftBorder
      && left <= (rightBorder - move)
      && !positionIsUsed(top, left)) {
    $("#player").css("top", top + "px");
    $("#player").css("left", left + "px");
  }
}

// when a key is down, choose the correct move-function if it is an arrow-key
$(document).keydown( function (event) {
  switch (event.keyCode) {
    case 37:
      movePlayer(4);
      break;
    case 38:
      movePlayer(1);
      break;
    case 39:
      movePlayer(2);
      break;
    case 40:
      movePlayer(3);
      break;
  }
});

// called function when build-button is clicked
function buildLevelBtnAction () {
  $("#invalidLevelText").hide();
  loadLevel($("#levelSelect").val());
}

// loads a level with ID levelId
function loadLevel (levelId) {
  $.getJSON("levels/level_" + levelId + ".json", function (data) {
    buildField(data.config, data.startpoint, data.walls);
  });
}

// builds a field
function buildField (config, startpoint, walls) {
  // create gameField
  $("#gameField").empty();
  $("#gameField").css("width", config.fieldWidth + "px");
  $("#gameField").css("height", config.fieldHeight + "px");
  rightBorder = $("#gameField").width();
  bottomBorder = $("#gameField").height();

  // create player element
  var playerHtml = '<div id="player" style="top: ' + startpoint.top + 'px; left: ' + startpoint.left + 'px"></div>';
  $("#gameField").append(playerHtml);

  // create each wall element
  var wallHtml;
  $.each(walls, function (id, wall) {
    if (wall.top == startpoint.top && wall.left == startpoint.left) {
      $("#invalidLevelText").show();
      clearGameField();
      return false;
    }
    wallHtml = '<div id="' + id + '" class="wall" style="top: ' + wall.top + 'px; left: ' + wall.left + 'px"></div>';
    $("#gameField").append(wallHtml);
  });
}

// game-field will be cleared
function clearGameField () {
  $("#gameField").empty();
  $("#gameField").css("width", "0px");
  $("#gameField").css("height", "0px");
}
