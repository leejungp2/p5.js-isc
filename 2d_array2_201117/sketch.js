let grid;
let rows;
let cols;
let ps = 40;

function setup() {
  createCanvas(400, 400);
  rows = height/ps;
  cols = width/ps;
  
  grid = new Array(rows);
  for (let i=0; i<cols; i++){
    grid[i] = new Array(cols);
  }
  for(let i=0; i<rows; i++){
    for (let j=0; j<cols; j++){
      grid[i][j] = new Cell(j*ps, )
    }
  }

}

function draw() {
  background(220);
  for (let i=0; i<rows; i++){
    
  }
}