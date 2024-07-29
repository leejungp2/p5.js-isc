let dream = false;
let wakeup = false;

let circleX = 130;
let circleY = 270;
let circleR = 40;

let eX = 150;
let ew = 370;
let eY = 250;
let eh = 340;

function setup() {
  createCanvas(600, 500);
  background(40,40,75);
}


function draw() {

  
  //기둥 뒤
  noStroke();
  fill(170,140,110);
  rect(100,200,20,230);
  rect(450,230,20,190);
  //침대 등
  fill(150,120,90);
  quad(110,290,110,215,50,260,50,350);
  //매트리스
  fill(180,140,150);
  rect(30,350,350,60);
  fill(145,110,125);
  quad(380,410,380,350,460,290,460,350);
  fill(200,160,180);
  quad(460,290,380,350,30,350,110,290);
  //배게
  fill(250);
  quad(65,300,100,330,130,300,120,240);
  stroke(250);
  strokeWeight(3);
  curve(40,100,65,300,100,330,50,400)
  noStroke();
  //캐릭터
  fill(190,170,210);
  ellipse(220,290,140,80);//몸
  fill(220,205,180);
  circle(165,290,20); //목
  fill(245,225,200);
  circle(130,270,80); //얼굴
  circle(190,260,24);
  quad(178,260,201,255,217,310,193,315);
  circle(205,315,24);
  quad(205,303,205,327,140,330,140,315)
  circle(133,323,20); //손
  fill(255,0,150,50);
  circle(128,300,12);
  circle(160,265,12);//볼
  
  //머리카락
  stroke(220,210,80);
  fill(250,240,70);
  arc(118,248,50,40,40,QUARTER_PI);
  arc(105,266,50,40,30,QUARTER_PI);
  arc(92,285,50,40,30,QUARTER_PI);
  //표정
  noFill();
  strokeWeight(2);
  stroke(150,120,90);
  arc(120, 283, 20, 20, 0, HALF_PI);
  arc(140, 260, 20, 20, 0, HALF_PI);
  line(142,285,146,288)
  arc(135, 274, 50, 50, 0, HALF_PI);
  //모자
  noStroke();
  fill(170,110,240);
  triangle(93,285,135,229,70,220);
  fill(190,170,210);
  circle(70,220,10);
  
  //이불
  fill(185,65,110);
  quad(290,250,440,280,370,340,230,340); //이불  
  stroke(140,70,105);
  strokeWeight(2);
  curve(40,100,230,340,370,340,50,400);
  curve(400,150,230,340,290,250,450,400);
  curve(400,150,370,340,440,280,300,400);
  curve(40,400,290,250,440,280,50,300);
  noStroke();
  //기둥 앞
  fill(170,140,110);
  rect(30,230,20,250);
  rect(380,270,20,210);
  //기둥 위
  fill(145,125,100);
  circle(40,220,30);
  circle(110,190,30);
  circle(460,220,30);
  circle(390,260,30);

   //별빛
  if (frameCount % 10 == 0){
    fill(random(200,250), random(200,250), random(0,100), random(150,250))
    stroke(random(200,250), random(200,250), random(0,100), random(30,100))
    strokeWeight(random(1,10))
    circleSize=random(5,10)
    ellipse(random(600), random(0,200), circleSize, circleSize);
  noStroke();

}
  
  //꿈나라
  if (dream) {
  noStroke();
  fill(150);
  ellipse(170,200,20,15);
  ellipse(200,170,30,25);
  ellipse(320,130,180,150);
  ellipse(450,130,140,120);
  ellipse(560,90,130,110);
  ellipse(230,80,130,90);
  rect(210,0,400,120); 
  ellipse(200,20,100,90);

  
  //달
  fill(200,200,0);
  circle(350,100,150);
  fill(150);
  circle(300,70,150);
  
  fill(170,110,240);
  triangle(360,22,370,80,420,60);
  stroke(170,110,240);
  curve(300,100,360,22,420,60,450,100);
  noStroke();
  fill(190,170,210);
  circle(360,22,10); 
  }
  
  if (dist(mouseX, mouseY, circleX, circleY) < circleR) {
    dream=!dream;
  }
  
  else {
  noStroke();
  fill(40,40,75);
  ellipse(170,200,22,17);
  ellipse(200,170,32,27);

  ellipse(200,20,102,92);
  ellipse(230,80,132,92);
  ellipse(320,130,182,152);
  ellipse(450,130,142,122);
  ellipse(560,90,132,112);
  rect(210,0,400,100);}
  

  
  //깨우기
  if (wakeup) {
    textSize(30);
    textAlign(CENTER);
    fill(230,100,100);
    let offset = random(-2,2);
    text("WAKE UP!", width / 2 + offset, 150+offset);}
      
  fill(0,0,0,0);
  rect(eX,eY,250,90);}

  function mousePressed() {

  if (eX < mouseX && mouseX < eh && eY < mouseY && mouseY < eh) {
    wakeup = !wakeup;}
  }

  function keyPressed(){
  clear();}
