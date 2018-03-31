var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.background = 0;

var c = canvas.getContext('2d');

function Circle(x, y, dx, dy, radius){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;

	this.draw = function(){

		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
		c.strokeStyle = "Black";
		c.stroke();
	}

	this.update = function(){
		if(this.x+this.radius>window.innerWidth || this.x-this.radius<0)
		{
			this.dx = -this.dx;
		}
		if(this.y+this.radius>window.innerHeight || this.y-this.radius<0)
		{
			this.dy = -this.dy;
		}

		this.x+=this.dx;
		this.y+=this.dy;
	}
}

var circleArray = [];
for(var i = 0; i<200; i++)
{
	var radius = 20;
	var x = innerWidth/2;
	var y = innerHeight/2;
	var dx = (Math.random()-0.5)*10;
	var dy = (Math.random()-0.5)*10;
	circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate()
{
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);
	for(var i=0; i<circleArray.length; i++)
	{
		circleArray[i].draw();
		circleArray[i].update();
	}
}

animate();
