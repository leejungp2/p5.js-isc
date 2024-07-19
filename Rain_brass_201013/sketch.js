function setup() {
  createCanvas(800,300);
  background(225);
  for (let i = 2; i<=9; i++){
    for (let j = 1; j<=9; j++){
      textSize(20);
      text(i + "X" + j + "=" + (i*j), i*80-100, j*30);
    }    
  }
}