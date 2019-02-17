'use strict'
class Map{
  constructor(canvas){
    this.sizeX= 800; //width 800px - 
    this.sizeY = 400; //height 400px - 
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x = 0; 
    this.y = 0;
    this.speed = 2;
    this.direction = -1;
  }

  update(){
    if(this.x >= -7100){ 
      this.x = this.x + this.direction*this.speed;
    } else {
      this.speed=0;
    }
  }

  draw(){
    var img = new Image();
    img.src = "img/bg400x8000-2.png";
    this.ctx.drawImage(img, this.x, 0);
    //this.ctxStyle = 'green';
    //this.ctx.fillRect(this.x, this.y, this.sizeX, this.sizeY);
  }

}