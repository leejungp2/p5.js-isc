let catcher;
let drops = [];
let timer = 1000;
let score = 0;
let dropLimit = 1000;
function setup() {
  createCanvas(400, 400);
  catcher = new Catcher(50);
}

function draw() {
  background(255);
  //console.log(millis());
  if(millis()>timer){
    //add a drop to drops    
    drops.push(new Raindrop());
    //append(drops, new Raindrop());
    timer += 1000;
  }
  if (dropLimit<drop.length){
    drops = [];
  }
  for(let drop of drops){
    if (catcher.intersect(drop)){
      drop.caught();
    }
    drop.move();
    drop.display();
  }
    
  catcher.setLocation(mouseX, mouseY);
  catcher.display();
  //여기부터 text
  textSize(80);
  textAlign(CENTER, CENTER);
  fill(50,150,200);
  text

}