// saves the created level
function saveLevel () {

}

// function to build the field with the setted width and height
function buildField () {
  $("#gameField").empty();
  // create field with width (default: 100px) and height (default: 100px)
  var width = $("#fieldWidth").val();
  var height = $("#fieldHeight").val();
  if (width < 50 || width > 300) {
    width = 100;
  }
  if (height < 50 || height > 300) {
    height = 100;
  }
  $("#gameField").css("width", width + "px");
  $("#gameField").css("height", height + "px");

  var move = 10;
  var left = 0;
  var wallHtml; // '<div id="wall_ID" class="wall" style="top: XXpx; left: XXpx;"></div>'
  var wallId = 0;
  while (left <= (width - move)) {
    var top = 0;
    while (top <= (height - move)) {
      wallHtml = '<div id="wall_' + wallId + '" class="wall" style="top: ' + top + 'px; left: ' + left + 'px;" onclick="clickedWall(' + wallId + ');"></div>';
      $("#gameField").append(wallHtml);
      wallId++;
      top = top + move;
    }
    left = left + move;
  }
}

// when clicking on a wall, it will be selected for the level
function clickedWall (id) {
  var wall = $("#wall_" + id);
  if (wall.hasClass("selectedWall")) {
    wall.removeClass("selectedWall");
  } else {
    wall.addClass("selectedWall");
  }
}
