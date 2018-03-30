function Bird() {
  this.y = height / 2;
  this.x = 64;
  this.size = 50;
  this.radius = this.size/2;

  this.gravity = 0.5;
  this.lift = -20;
  this.velocity = 0;

  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, this.size, this.size);
  }
  this.up = function() {
    this.velocity += this.lift;
  }
  this.update = function() {

    if (this.y >= height-this.radius) {
      this.y = height-this.radius;
      this.velocity = 0;
    }
    this.velocity += this.gravity;
    this.velocity *= 0.92;
    this.y += this.velocity;

  }
}
