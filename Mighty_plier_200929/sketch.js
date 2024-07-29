//let oldX;
//let oldY;
function setup() {
   createCanvas(400,400);
   background(255);
}

function draw() {
  if(mouseIsPressed) {
  line(mouseX,mouseY,pmouseX,pmouseY);
  }}

function mousePressed(){
  ellipse(mouseX, mouseY, 30, 30);
  }
function mouseReleased() {
  rect(mouseX, mouseY, 30, 30);
}
function keyReleased() {
  background(255);
}