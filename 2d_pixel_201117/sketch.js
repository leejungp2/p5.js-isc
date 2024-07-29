let arr =[];
let rows; //y좌표
let cols; //x좌표
let pixelSize=8;
function setup() {
  createCanvas(400, 400);
  rows = height/pixelSize;
  cols = width/pixelSize;
  for (let i =0; i < rows; i++){
    arr[i] = [];
    for(let j =0; j<cols; j++){
      arr[i][j] = int(random(256));
    }
  }
}

function draw() {
  background(220);
  for (let i =0; i<arr.length; i++){
    for(let j=0; j<arr[0].length; j++){
      fill(arr[i][j]);
      rect(j*pixelSize, i*pixelSize, pixelSize);
    }
  }
  noLoop();
}