function Pipe() {
  this.gap = 200;
  this.top = random(height - this.gap);
  //this.top = 100;
  this.bottom = height;
  this.x = width;
  this.w = 80;
  this.speed = 2;

  this.show = function() {
    fill(255);
    rect(this.x, 0, this.w, this.top);
    rect(this.x, this.top + this.gap, this.w, this.bottom);
  }

  this.hits = function(bird) {
    if (bird.y - bird.radius <= this.top || bird.y + bird.radius >= this.top + this.gap) {
      if (bird.x >= this.x - bird.radius && bird.x <= this.x + this.w + bird.radius) {
        return true;
      }
    }
    return false;
  }
  this.update = function() {
    this.x -= this.speed;
  }


  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }
}
