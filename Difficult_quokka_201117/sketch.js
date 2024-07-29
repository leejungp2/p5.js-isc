let num = 50;
let xpos = [];
let ypos = [];
function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < num; i++) {
    xpos[i] = 0;
    ypos[i] = 0;
  }
}function draw() {
  background(0);
  //update the array
  for (let i = num-1; i >0; i--) {
    xpos[i] = xpos[i - 1];
    ypos[i] = ypos[i - 1];

  xpos[0] = mouseX;
  ypos[0] = mouseY;
  //draw a snake
  for (let i = 0; i < num; i++) {
    noStroke();
    fill(i*5);
    ellipse(xpos[i], ypos[i], 50-i, 50-i);
  }
}