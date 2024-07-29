let cam;
let ps = 24;

function setup() {
  createCanvas(640, 480);
  cam = createCapture(VIDEO);
  pixelDensity(1);
}

function draw() {
  background(0);
  cam.loadPixels();
  rectMode(CENTER);
  for (let y = 0; y < cam.height; y += ps) {
    for (let x = 0; x < cam.width; x += ps) {
      let index = (y * cam.width + (width - x - 1)) * 4;
      let r = cam.pixels[index + 0];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];
      let a = cam.pixels[index + 3];
      let bright = (r + g + b) / 3;
      fill(r,g,b);
      stroke(120);
      rect(x+ps/2, y+ps/2, bright/10, bright/10);
    }
  }
}

