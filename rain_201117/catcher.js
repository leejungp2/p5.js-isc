class Catcher {
  constructor(r) {
    this.r = r;
    this.x = 0;
    this.y = 0;
  }
  setLocation(x, y) {
    this.x = x;
    this.y = y;
  }
  display() { // catcher 그리기
    fill(120);
    noStroke();
    let dia = this.r * 2;
    ellipse(this.x, this.y, dia, dia);
  }
  intersect(b) {
    let d = dist(this.x, this.y, b.x, b.y);
    if (d < this.r + b.r) return true;
    else return false;
  }
}