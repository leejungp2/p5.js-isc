class Ordinary0Mini {
  constructor(_x, _y, _speed){
    this.x = _x;
    this.y = _y;
    this.speed = _speed;
  }
  
  display() {
    image(ordinaryMini[0], this.x, this.y);
}
  move(){
    this.x = this.x + this.speed;
    if (this.x > width){
      this.x = 0;
    }
  }
}