class Button {
  constructor(x, y, _image) {
    this.x = x;
    this.y = y;
    this.tint = 255;
    this.on = true;
    this.img = _image;
    this.display = false;
  }
  display() {
  this.display = true;
  if(this.on) {
  image(this.img, this.x, this.y);
  if(this.contains())
   this.tint = 255;
  else
   this.tint = 210;
  }
}

displayOff() {
  this.on = false;
  this.display();
}

contains() {
   if((this.x<mouseX)&&(this.x + 115 >mouseX)&&(this.y<mouseY)&&(this.y + 70>mouseY))
   return true;
  else
   return false;
}

}
