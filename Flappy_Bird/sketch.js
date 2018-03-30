var bird;
var pipes = [];

function setup() {
  createCanvas(500, 800);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(0);

  for (var i = pipes.length - 1; i >= 0; i--) {
    if (pipes[i].hits(bird)) {
      console.log("GAME OVER");
      bird.velocity = 0;
      bird.gravity = 0;
      for (var j = 0; j < pipes.length; j++) {
        pipes[j].speed = 0;
      }
    }
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }



    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();

  if (frameCount % 150 == 0) {
    pipes.push(new Pipe());

  }


}

function keyPressed() {
  if (key == ' ') {
    //console.log("SPACE");
    bird.up();
  }
}


//Bird constructor
