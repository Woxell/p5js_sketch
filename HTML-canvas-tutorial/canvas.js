var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
var mouse = {
  x: undefined,
  y: undefined
}

window.addEventListener('mousemove', function() {
  mouse.x = event.x;
  mouse.y = event.y;
});
window.addEventListener('resize', function(){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	init();
})

function Circle(x, y, dx, dy, radius /*, r, g, b*/ ) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function() {

    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    //c.fillStyle = 'rgba(' + r + ', ' + g + ', ' + b + ')';
    c.fillStyle = this.color;
    c.fill();
  }

  this.update = function() {

    //interactivity
    this.vicinity = 50;
    if (mouse.x - this.x <= this.vicinity && mouse.x - this.x >= -this.vicinity &&
      mouse.y - this.y <= this.vicinity && mouse.y - this.y >= -this.vicinity &&
      mouse.x >= 10 && mouse.x <= innerWidth - 10 &&
      mouse.y >= 10 && mouse.y <= innerHeight - 10 &&
      this.radius <= maxRadius) {
      this.radius += 1;
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }
    //Collision
    if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    //Updated coordinates
    this.x += this.dx;
    this.y += this.dy;
  }
}

var maxRadius = 60;
var maxCircles = Math.floor(innerWidth*innerHeight/maxRadius/15);
console.log(maxCircles);
//var minRadius = 5;
var circleArray = [];
var colorArray = ["#0D397F", "#0D397F", "#1C77C8", "#FF1A6A", "#BC0639"];

function init() {
  circleArray = [];
	var maxCircles = Math.floor(innerWidth*innerHeight/maxRadius/20);
  for (var i = 0; i < maxCircles; i++) {
    var radius = Math.random() * 8 + 3;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = Math.random() - 0.5;
    var dy = Math.random() - 0.5;
    // var r = Math.floor(Math.random() * 255);
    // var g = Math.floor(Math.random() * 255);
    // var b = Math.floor(Math.random() * 255);
    circleArray.push(new Circle(x, y, dx, dy, radius /*, r, g, b*/ ));
  }
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].draw();
    circleArray[i].update();
  }
}

animate();
init();
