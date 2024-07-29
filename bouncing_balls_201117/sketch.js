let balls = [];
function setup() {
  createCanvas(400, 400);
  moreBall(random(width), random(height));
  //balls[0] = new Ball(width/2, height/2, 20, 10, randomColor());
}function draw() {
  background(0);
  // if (frameCount % 20 ==0) {
  //   moreBall();
  // }
  for (let ball of balls) {
    ball.setGravity();
    ball.move();
    ball.display();
  }
  for (let i = 0; i < balls.length; i++){
    balls[i].setGravity();
    balls[i].move();
    balls[i].display();
  }
}function mouseClicked() {
  moreBall(mouseX, mouseY);
}function randomColor() {
  let c = color(random(255), random(255), random(255), random(255));
  return c;
}function moreBall(_x, _y) {
  let b = new Ball(_x, _y, random(40), random(20), randomColor());
  //append(balls, b);
  balls.push(b);
}