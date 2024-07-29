class Raindrop{
  constructor(){
    this.r = 10;
    this.x = random(width);
    this.y = -this.r;
    this.c = color(80, 120, 150, 100);
    this.speed = random(2, 5);
  }
  move(){
    this.y += this.speed;
  }
  display(){
    fill(this.c);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }
  caught() {
    this.speed = 0;
    this.y = -999;
  }
}