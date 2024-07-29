let img;
let ps=12;
function preload(){
  img = loadImage("Hermosa Beach Pier sunset.jpg")
}
function setup() {
  createCanvas(img.width, img.height);
  noStroke();
}

function draw() {
  background(220);
  image(img, 0, 0)
  img.loadPixels();

  let index = (mouseY*img.width + mouseX) * 4;
  let r = img.pixels[index+0];
  let g = img.pixels[index+1];
  let b = img.pixels[index+2];
  let a = img.pixels[index+3];
  let c = color(r,g,b,a);

  fill(c);
  stroke(255);
  strokeWeight(3);
  ellipse(mouseX, mouseY, 100, 100)
}