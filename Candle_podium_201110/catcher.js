class Catcher{
  constructor(r){
    this.r =r;
    this.x =0;
    this.y =0;
  }
  setLocation(x,y){
    this.x=x;
    this.y=y;
  }
  display(){
    fill(120);
    noStroke();
    let dia = this.r*2;
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }
  //intersect
}