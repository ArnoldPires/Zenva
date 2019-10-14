//animate the Canvas
//dimensions of the rectangle
var x = 80;
var y = 70;
var w = 70;
var h = 80;
//speed at which it moves
var speed = 3;
//update the rectangle position
var update = function() {
  if(x >= 270) {
    x = 270;
    speed = -speed;
  }
  if(x <=10) {
    x = 10;
    speed = -speed;
  }
  x = x +  speed;
};
//show it on the screen
var draw = function() {
  ctx.clearRect(0,0,500,300);
  ctx.fillStyle = "rgb(200, 0, 100)";
  ctx.fillRect(x, y, w, h);
};
//Update the rectangle position
//gets executed multiple times per second
var step = function() {
  update();
  draw();
  window.requestAnimationFrame(step);
};
//initial kick
step();
