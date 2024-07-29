let catcher;
let drops = [];
let timer = 1000;
let score = 0;
let dropLimit = 1000;
function setup() {
  createCanvas(400, 400);
  catcher = new Catcher(50);
}function draw() {
  background(255);
  //console.log(millis());
  if (millis() > timer) {
    drops.push(new Raindrop());
    // let r = new Raindrop();
    // drops.push(r);
    //append(drops, new Raindrop());
    timer += 100;
  }
  if (dropLimit < drops.length) {
    drops = [];
  }
  // for (let drop of drops) {
  //   if (catcher.intersect(drop)) {
  //     drop.caught();
  //   }
  //   drop.move();
  //   drop.display();
  // }
  for (let i = 0; i < drops.length; i++) {
    if (catcher.intersect(drops[i])) {
      drops[i].caught();
      score += 1;
    }
    drops[i].move();
    drops[i].display();
  }
  catcher.setLocation(mouseX, mouseY);
  catcher.display();
  textSize(80);
  textAlign(CENTER, CENTER);
  fill(50, 150, 200);
  text(score, width/2, height/2);
  fill(140, 220, 250);
  textSize(40);
  text(int(millis()/100), 50, 50);
}

