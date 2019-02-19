'use strict'
class ItemPoints{
  constructor(canvas, x, y){
    this.size = 35;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x = x;
    this.y = y;
    this.direction = -1;
    this.speed = 2;
  }

  draw(){
    var img = new Image();
    img.src = "img/item-points.png";
    this.ctx.drawImage(img,this.x,this.y);
  }
  update(){
    this.x = this.x + this.direction*this.speed;
  }
}