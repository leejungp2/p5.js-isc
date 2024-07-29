let cars = [];
function setup() {
  createCanvas(400, 400);
  for (let i=0; i<20;i++){
    let c = color(random(255), random(255), random(255));
    cars[i] = new Car(c, width/2, random(height), random(20));
  }
}function draw() {
  background(255);
  for(let i=0; i<cars.length; i++){
    cars[i].move();
    cars[i].display();
  }
}