// move-step
var move = 10;

// the int will be returned from a css-px-value
function getCssPxValue (str) {
  var int = str.substr(0, str.length - 2);
  return parseInt(int);
}
