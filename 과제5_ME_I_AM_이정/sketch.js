let stage = 0;
let lilly;

//let amatic;

//button
let button1;
let button2;
let button3;
let button4;

//stage1
let stage1complexhead;
let stage1complex1;
let stage1complex2;

//stage2
let stage2ambivalent1;
let stage2ambivalent2;
let ambivalent = [];
let current = 0;

//stage3
//let stage3ordinary1;
//let stage3ordinary2;
//let ordinaryperson;
let ordinary = [];
let stage3ordinaryperson;
let ordinaryperson = [];
let ordinaryMini = [];
let ordinary0Mini = [];
let num = 20;
let distance = 0;
let ps = 12;

//stage 4
let cam;

function preload(){
  lilly = loadFont('assets/Lilly__.ttf');
  bgm = loadSound("assets/bgm_Me2.mp3");
  
//  amatic = loadFont('assets/AmaticSC-Bold.ttf')
  button1 = loadImage('assets/button/button1.png');
  button2 = loadImage('assets/button/button2.png');
  button3 = loadImage('assets/button/button3.png');
  button4 = loadImage('assets/button/button4.png');
  stage1complexhead = loadImage('assets/stage1/complexhead.png');
  stage1complex1 = loadImage('assets/stage1/complex1.png');
  stage1complex2 = loadImage('assets/stage1/complex2.png');
//  stage2ambivalent1 = loadImage('assets/stage2/ambivalent1.png');
//  stage2ambivalent2 = loadImage('assets/stage2/ambivalent2.png');
//  stage3ordinary1 = loadImage('assets/stage3/ordinary1.png');
//  stage3ordinary2 = loadImage('assets/stage3/ordinary2.png');
  stage3ordinaryperson = loadImage('assets/stage3/ordinaryperson.png');
  stage3ordinarypersonMini = loadImage('assets/stage3/ordinarypersonMini.png');
  for (let i = 0; i <2; i++){
    ambivalent[i] = loadImage("assets/stage2/ambivalent" + i + ".png");
  }for (let j = 0; j <2; j++){
    ordinary[j] = loadImage("assets/stage3/ordinary" + j + ".png");
  }
  for (let l = 0; l <2; l++){
    ordinaryMini[l] = loadImage("assets/stage3/ordinary" + l + "Mini.png");
  }
}
function setup() {
  createCanvas(700, 500);
  background(255);
  textFont(lilly);
  bgm.loop();
  //stage3
  distance = width/num;
  for(let k =0; k<num; k++){
    ordinaryperson[k] = distance*k*3 + distance/2
  for (let n=0; n<20; n++){
    ordinary0Mini[n] = new Ordinary0Mini(width/2, 50, 5);
  }
  }
  //stage4
  cam = createCapture(VIDEO);
  cam.size(300,200);
  cam.hide();
}

function draw(){
  switch(stage){
    case 0:
      background(0);
      textSize(50);
      textAlign(CENTER);
      fill(255);
      text("I AM", width/2, height/2);
      drawButtonWhite();
    break;
    case 1:
      background(0);
      textSize(40);
      textAlign(CENTER);
      fill(255);
      text("I am complex.", width/2, height/2);
      drawButtonWhite();
    break;
    case 2: //stage1
      background(255);
      image(stage1complexhead, 0, 0);
      drawButtonBlack();
    break;
    case 3:
      background(255);
      image(stage1complexhead, 0, 0);
      image(stage1complex1, random(-2,2), random(-2,2));
      image(stage1complex2, random(-2,2), random(-2,2));
      drawButtonBlack();
    break;
    case 4:
      background(0);
      textSize(40);
      textAlign(CENTER);
      fill(255);
      text("I am ambivalent.", width/2, height/2);
      drawButtonWhite();
    break;
    case 5: //stage2
      background(255);
      image(ambivalent[0], 0, 0);
      drawButtonBlack();
    break;
    case 6: 
      background(255);
      image(ambivalent[1], 0, 0);
      drawButtonBlack();
    break;
    case 7:
      background(255);
       if(frameCount % 10 == 0){
         image(ambivalent[current % 2], 0, 0);
         current++;}
       drawButtonBlack();
    break;
    case 8:
      background(0);
      textSize(40);
      textAlign(CENTER);
      fill(255);
      text("Still, I am ordinary.", width/2, height/2);
      drawButtonWhite();
    break;
    case 9: //stage3
      background(255); 
      for(let k = 0; k < ordinaryperson.length; k++) {
      image(stage3ordinarypersonMini, ordinaryperson[k]+105, 50);
      current++;}
      for(let k = 0; k < ordinaryperson.length; k++) {
      image(stage3ordinarypersonMini, ordinaryperson[k], 280);
      current++;}
        if(frameCount % 2 == 0){
         image(ordinaryMini[current % 2], 18, 50);
         current++;
       }drawButtonBlack();
    break;
    case 10: //stage3-2
      background(255);
      for(let k = 0; k < ordinaryperson.length; k++) {
      image(stage3ordinarypersonMini, ordinaryperson[k], 50);
      current++;}
      for(let k = 0; k < ordinaryperson.length; k++) {
      image(stage3ordinarypersonMini, ordinaryperson[k], 280);
      current++;}
      for(let n=0; n<ordinary0Mini.length; n++){
        ordinary0Mini[n].move();
        ordinary0Mini[n].display();
      }drawButtonBlack();
    break;
    case 11:
      background(0);
      textSize(40);
      textAlign(CENTER);
      fill(255);
      text("Who are you?", width/2, height/2);
      drawButtonWhite();
    break;
    case 12:
      background(255);
      image(cam, 10, 10);
      image(cam, 440, -30);
      image(cam, -20, 330);
      image(cam, 400, 300);
      filter(GRAY);
      image(cam, 200, 150);
    break;

}}

//button
function mousePressed() {
  if(mouseX >= 550 && mouseX <=665 && mouseY >= 400 && mouseY <= 470) {
  stage++;
 }
}

function drawButtonBlack(){
  if(mouseX >= 550 && mouseX <=665 && mouseY >= 400 && mouseY <= 470) {
    //hover
    imageMode(CORNER);
    image(button2, 550, 400);
  } else {
    imageMode(CORNER);
    image(button1, 550, 400);
  }
}

function drawButtonWhite(){
  if(mouseX >= 550 && mouseX <=665 && mouseY >= 400 && mouseY <= 470) {
    //hover
    imageMode(CORNER);
    image(button4, 550, 400);
  } else {
    imageMode(CORNER);
    image(button3, 550, 400);
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
  stage = 0;
  bgm.stop();
  bgm.loop();
  }
}