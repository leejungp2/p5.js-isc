

function setup() {
  createCanvas(200,200); //캔버스 생성 코드
}

function draw() {
  background(220);
  //face
  ellipse(100,70,50,50);
  ellipse(90,65,10,15);
  ellipse(110,65,10,15);
  //body
  rectMode(CENTER);
  rect(100,125,40,60);
  //arms
  line(80,110,60,80);
  line(140,80,120,110);
  //mouth
  rect(100,80,8,8);
  //legs
  line(110,155,110,180);
  line(90,155,90,180);

}