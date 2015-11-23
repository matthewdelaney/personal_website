var mainCanvas;
var context;

var field;

function findCell(e) {
  var x = e.offsetX || e.pageX - e.target.offsetLeft;
  var y = e.offsetY || e.pageY - e.target.offsetTop;

  // Change the line-width so that if the user has clicked on a cell,
  // that cell will be re-drawn with a thicker outline.
  context.fillStyle = '#35075A';
  context.strokeStyle = '#35075A';
  context.lineWidth = 4;

  // Did the user click in a cell?
  var result = field.findCell(x, y);
  if (result != null) {
    // If they did, draw it with the style properties last set
    result.draw(context);
    result.highlighted = true;
  }
}
      
(function init() {
  // If the user clicks the page, see if they clicked a cell and, if they did, highlight it
  document.onclick = findCell;

  // Get a handle on the main canvas
  mainCanvas = document.getElementById("mainCanvas");

  // Get a 2D drawing context for the main canvas
  context = mainCanvas.getContext("2d");
  
  // Set the style properties.
  context.fillStyle   = '#faebd7';
  context.strokeStyle = '#35075A';
  context.lineWidth   = 1;
  
  // Parameters to constructor are cell-size, grid-height, grid-width, grid-top, grid-left
  field = new Hexcellent(25, 7, 20, 10, 10);

  // Draw the grid using the style properties last set
  field.draw(context);
})();
