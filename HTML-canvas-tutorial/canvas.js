var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.background = 0;

var c = canvas.getContext('2d');
var mouse = {
	x: undefined,
	y: undefined
}

window.addEventListener('mousemove', function(event){
	mouse.x = event.x;
	mouse.y = event.y;
})
window.addEventListener('mouseleave', function(event){
	console.log(event);
})

function Circle(x, y, dx, dy, radius, r, g, b) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function() {

    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = 'rgba(' + r + ', ' + g + ', ' + b + ')';
    c.fill();
  }

  this.update = function() {
    if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

		//interactivity
		if (mouse.x - this.x < 50 &&
			  mouse.x - this.x > -50 &&
			  mouse.y - this.y < 50 &&
			  mouse.y - this.y > -50 &&
				this.radius < 20 )
		{
			  this.radius += 1;
		} else if(this.radius > radius) {
			this.radius -=1;
		}
  }
}

var circleArray = [];
for (var i = 0; i < 400; i++) {
  var radius = 2;
	var x = innerWidth/2;
	var y = innerHeight/2;
	var dx = Math.cos(Math.random() * Math.PI*2)*Math.random()*10;
	var dy = Math.sin(Math.random() * Math.PI*2)*Math.random()*10;
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  circleArray.push(new Circle(x, y, dx, dy, radius, r, g, b));
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
