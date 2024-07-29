class Ball {
  constructor(r){
    this.x = random(width);
    this.y = random(height);
    this.r = r;
    this.xs = random(-5,5);
    this.ys = random(-5,5);
    this.c = color(255);
  }
  display(){
    fill(this.c);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }
  move(){
    this.x += this.xs;
    this.y += this.ys;
    if(this.x < 0 || this.x > width) this.xs = -this.xs;
    if(this.y < 0 || this.y > height) this.ys = -this.ys;
  }
  highlight(){
    this.c = color(255,100,100);
  }
  unhighlight(){
    this.c = color(255);
  }
  intersect(b){
    let d = dist(this.x, this.y, b.x, b.y);
    if(d < this.r+b.r) return true;
    else return false;
  }
}