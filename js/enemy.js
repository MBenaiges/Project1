'use strict'
class Enemy{
  constructor(canvas,y){
    
    this.size = 35;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x = this.canvas.width;
    this.y = y;
    this.speed = 5;
    this.direction = -1;
    //Sprite
    var shift = 0;
    var frameWidth = 300;
    var frameHeight = 300;
    var totalFrames = 4;
    var currentFrame = 0;
  }

  update(){
    this.x = this.x + this.direction*this.speed;
  }

  // IMAGEN ESTATICA
  draw(){
    //imagen enemigo
    var img = new Image();
    img.src ="img/enemy-1.png";
    this.ctx.drawImage(img,this.x, this.y-this.size/2);
    //this.ctx.fillStyle = 'red';
    //this.ctx.fillRect(this.x,this.y - this.size/2, this.size,this.size)
  }
  
 //SPRITE
 /* draw(){
    var img = new Image();
    img.src = "img/enemy.png";
    img.addEventListener("load", loadImage, false)
  }*/
}
