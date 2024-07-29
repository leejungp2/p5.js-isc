function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  noFill();
  //sky
  c1 = color(170, 180, 230);
  c2 = color(235,190,130);
  setGradient(c1, c2);
  function setGradient(c1, c2) {
  // noprotect
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}

  //sea
  noStroke()
  fill(80,85,180);
  rect(0,400,600,200);
  stroke(0,40,160);
  line(0,400,600,400);

  strokeWeight(50);
  stroke(130,110,95);
  curve(0,100,700,570,0,520,100,470);
  strokeWeight(50);
  stroke(255,255,255,100);
  curve(0,100,700,570,0,520,100,470);
  noStroke();
  fill(130,110,95);
  triangle(0,530,0,600,400,600);

  //sea shadow
  noStroke();
  fill(50,55,125);
  rect(20,405,120,32);
  rect(250,405,110,31);
  rect(500,403,90,31);
  
  //wave
  strokeWeight(30);
  stroke(255,255,255,50);
  curve(0,100,620,480,0,450,100,470);
  strokeWeight(25);
  stroke(255,255,255,20);
  curve(0,100,550,400,0,400,100,470);
    
  //building_left_quad
  strokeWeight(2);
  stroke(100);
  fill(125,138,132);
  quad(120,160,150,140,150,400,120,400) ;
  fill(166,186,176);
  quad(150,140,200,145,200,400,150,400);
  //shadow
  noStroke();
  fill(130,150,140);
  quad(170,160,170,400,198,400,198,190);
  //window
  stroke(255);
  strokeWeight(1);
  line(160,398,160,143);
  line(170,398,170,144);
  line(180,400,180,145);
  line(190,400,190,146);
  line(152,150,198,155);
  line(152,160,198,165);
  line(152,170,198,175);
  line(152,180,198,185);
  line(152,190,198,195);
  line(152,200,198,205);
  line(152,210,198,215);
  line(152,220,198,225);
  line(152,230,198,235);
  line(152,240,198,245);
  line(152,250,198,255);
  line(152,260,198,265);
  line(152,270,198,275);
  line(152,280,200,285);
  line(152,290,200,295);
  line(152,300,200,305);
  line(152,310,200,315);
  line(152,320,200,325);
  line(152,330,200,335);
  line(152,340,200,345);
  line(152,350,200,355);
  line(152,360,200,365);
  line(152,370,200,375);
  line(152,380,200,385);
  line(152,390,198,395);
  
  //building_ellipse
  stroke(100);
  strokeWeight(2);
  line(305,170,305,400);
  line(355,170,355,400);
  noFill();
  fill(190,200,215);
  rect(305,170,50,230);
  ellipse(330,170,50,30);
 
  //building_main
  noStroke();
  fill(130,150,210);
  triangle(250,150,330,150,310,50);
  noStroke();
  fill(130,150,210);
  rect(250,150,80,250);
  fill(130,150,210);
  
  stroke(255);
  strokeWeight(1);
  fill(255,255,255,100);
  triangle(250,150,330,150,250,250);
  triangle(250,150,330,150,330,250);
  triangle(250,400,250,250,330,400);
  triangle(250,400,330,250,330,400);
  stroke(0);
  strokeWeight(1);
  
  stroke(70);
  strokeWeight(2);
  fill(130,150,210);
  curve(500,100,310,50,250,150,300,20);
  noFill();
  curve(330,150,330,150,310,50,400,20);
  line(250,400,250,150);
  line(330,150,330,400);
  line(330,150,330,400);

  
  //building_right1
  stroke(100);
  strokeWeight(2);
  fill(160,200,210);
  rect(370,200,60,200);
  //shadow
  noStroke();
  fill(140,180,190);
  rect(390,201,30,198);
  fill(160,200,210);
  triangle(390,201,390,220,405,201);
  
  //building_right2
  fill(160,210,240);
  noStroke();
  triangle(400,230,470,230,470,150);
  rect(400,230,70,170);
  stroke(70);
  strokeWeight(2);
  curve(500,150,400,230,470,150,600,200);
  line(400,230,400,400);
  line(470,150,470,400);
  stroke(255);
  strokeWeight(3);
  line(468,190,402,270);
  line(468,230,402,310);
  line(468,270,402,350);
  line(468,310,402,390);
  line(468,350,428,398);
  

  //building_left
  stroke(70);
  strokeWeight(2);
  curve(100,150,180,180,225,240,200,200);
  line(180,180,180,400);
  line(225,240,225,400);
  noStroke();
  fill(170,215,210);
  rect(181,240,42,160);
  triangle(181,181,181,240,225,240);
  stroke(0);

   //bridge high
  stroke(0);
  line(0,270,600,260);
  stroke(247,247,245);
  strokeWeight(10);
  line(0,275,600,265);
  stroke(0);
  strokeWeight(17);
  line(0,285,600,275);
  strokeWeight(10);
  stroke(150,150,150);
  line(0,295,600,285);
  stroke(0);
  strokeWeight(1);
  line(0,300,600,290);
  //bridge low
  line(0,325,600,315);
  line(0,350,600,340);
  strokeWeight(9);
  stroke(150,150,150);
  line(0,330,600,320);
  line(0,345,600,335);
  stroke(0);
  strokeWeight(11);
  line(0,338,600,328);
  strokeWeight(1);
  stroke(0);
  //bridge bottom_back
  fill(180,170,130);
  rect(65,407,70,20);
  rect(285,406,70,20);
  rect(515,404,70,20);
  //bridge column back
  fill(120,120,120);
  rect(90,299,20,113);
  rect(310,295,20,113);
  rect(540,291,20,113);
  //bridge bottom_front
  fill(250,235,180);
  rect(25,410,70,20);
  rect(255,409,70,20);
  rect(505,408,70,20);
  //bridge column front
  fill(247,247,245);
  rect(50,285,20,130);
  rect(280,281,20,133);
  rect(530,277,20,136);
}