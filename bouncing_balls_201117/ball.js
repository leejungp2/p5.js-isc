class Ball {
  constructor(x,y,d,speed,color){
    this.x = x;
    this.y = y;
    this.d = d;
    this.speed = speed;
    this.color = color;
    this.gravity = random(1,2);
  }
  setGravity() {
    this.speed += this.gravity;
  }
  move() {
    this.y += this.speed;
    if(this.y >= height) {
      this.y = height;
      this.speed = -0.95 * this.speed;
    }
  }
  display() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.d, this.d);
  }
}