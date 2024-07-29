let goRight = true;
let circleX = 100;

function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(0);
  if (goRight) {
    circleX++;
  } else {
    circleX--;
  }
  ellipse(circleX, height/2,20,20);
  if (circleX == width || circleX==0) {
    goRight = !goRight;
  }
}