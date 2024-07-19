function setup() {
  createCanvas(400, 400);
  background(255);
  noStroke();
}



function draw() {
  if (framecount % 5 == 0)
    fill(random(256), random(256), random(256), random(20,80))
    circleSize=random(10,100)
    ellipse(random(400), random(400), circleSize, circleSize);
  }
  



