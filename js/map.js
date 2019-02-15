'use strict'
class Map{
  constructor(canvas){
    this.sizeX= 900; //width 800px - 
    this.sizeY = 400; //height 400px - 
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x = 0; 
    this.y = 0;
    this.speed = 3;
    this.direction = -1;
  }

  update(){
    if(this.x >= -8000){ 
      this.x = this.x + this.direction*this.speed;
    }
  }

  draw(){
    var img = new Image();
    img.src = "img/bg400x8000.png";
    this.ctx.drawImage(img, this.x, 0);
    //this.ctxStyle = 'green';
    //this.ctx.fillRect(this.x, this.y, this.sizeX, this.sizeY);
  }

}