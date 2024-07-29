function setup() {
  createCanvas(400, 400);
  mouseClicked();
}

function draw() {
}


function mid(a1, a2, a3){
  return((a1 + a2 + a3) / 3);
}
function mouseClicked(){
  background(200,200,200)
  fill(255,255,255);
  stroke('black');
  strokeWeight(1);
  x1= random(400);
  x2= random(400);
  x3= random(400); 
  y1= random(400);
  y2= random(400);
  y3= random(400);
  triangle(x1,y1,x2,y2,x3,y3);
  stroke('red');
  strokeWeight(5);
  fill(200,0,0);
  point(mid(x1,x2,x3),mid(y1,y2,y3));
}


