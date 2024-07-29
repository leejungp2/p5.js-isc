
function setup() {
  createCanvas(600, 500);
  background(255);
  
  //벽
  wallc1=random(256)
  wallc2=random(256)
  wallc3=random(256)
  fill(wallc1,wallc2,wallc3)
  quad(50,350,550,350,600,500,0,500)
  fill(wallc1,wallc2,wallc3,100)
  quad(50,350,0,500,0,0,50,0)
  quad(550,350,600,500,600,0,550,0)
  rect(50,0,500,350)
  
  //창문
  windw=random(100,300)
  windh=random(100,200)
  fill(180,150,120)
  rect(width/5, height/6,windw,windh)

  //조명
  line(450,0,450,70)
  fill(255,250,0)
  circle(450,145,20)
  fill(100)
  triangle(450,70,420,150,480,150)
}

//창문 밖
function draw() {
  push();
  if (frameCount % 100 == 0)
    fill(random(0,100), random(100,200), random(200,255), random(100,255))
    rect(width/5+15, height/6+15,windw-30,windh-30)
  
//태양
  push();
  stroke(240,240,100)
  strokeWeight(5);
  fill(255,215,30);
  translate(width/5+50, height/6+5);
  ellipse(0, 50, 33, 33);
  pop(); 
}

function mousePressed() {
  //침대 등
  fill(random(256),random(256),random(256))
  rectSize1=random(150,300)
  rectSize2=random(50,100)
  rect(mouseX, mouseY, rectSize1, rectSize2);
  //배게
  fill(255)
  rect(mouseX+20, mouseY+30,rectSize1/3,rectSize2-30,10)
  rect(mouseX+rectSize1-rectSize1/3-20,mouseY+30,rectSize1/3,rectSize2-30,10)
  
  //침대
  bedbc1=random(256)
  bedbc2=random(256)
  bedbc3=random(256)
  fill(bedbc1,bedbc2,bedbc3)  
  bedc1=random(200,250)
  bedc2=random(150,200)
  fill(bedc1,bedc1,bedc1)
  quadX1=mouseX-30
  quadX2=mouseX+rectSize1+30
  quadY=mouseY+rectSize2+100
  quad(mouseX,mouseY+rectSize2,mouseX+rectSize1,mouseY+rectSize2,quadX2,quadY,quadX1,quadY)
  fill(bedc2,bedc2,bedc2)
  rect(quadX1,quadY,rectSize1+60,30)
}



