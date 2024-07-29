let b1;
let b2;
function setup() {
  createCanvas(400, 400);
  b1 = new Ball(50);
  b2 = new Ball(100);
  noStroke();
}function draw() {
  background(220);
  b1.move();
  b2.move();
  if (b1.intersect(b2)) {
    b1.highlight();
    b2.highlight();
  } else{
    b1.unhighlight();
    b2.unhighlight();
  }
  b1.display();
  b2.display();
}// function intersect(ball1, ball2) {
//   let d = dist(ball1.x, ball1.y, ball2.x, ball2.y);
//   if (d < ball1.r + ball2.r) return true;
//   else return false;
// }