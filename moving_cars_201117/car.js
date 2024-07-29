class Car {
  constructor(_c, _x, _y, _speed){
    this.c = _c;
    this.x = _x;
    this.y = _y;
    this.speed = _speed;
  }
  
  display() {
    rectMode(CENTER);
    stroke(0);
    fill(this.c);
    rect(this.x, this.y, 20, 10);
  }
  
  move() {
    this.x = this.x + this.speed;
    if (this.x > width) {
      this.x = 0;
    }
  }
}