//animate the Canvas
//dimensions of the rectangle
var x = 80;
var y = 70;
var w = 70;
var h = 80;
//speed at which it moves
var speed = 1;
//update the rectangle position
var update = function() {
  x = x +  speed;
};
//show it on the screen
var draw = function() {
  ctx.clearRect(0,0,500,300);
  ctx.fillStyle = "rgb(200, 0, 100)";
  ctx.fillRect(x, y, w, h);
};
//gets executed multiple times per second
var step = function() {
  update();
  draw();
  window.requestAnimationFrame(step);
};
//initial kick
step();
