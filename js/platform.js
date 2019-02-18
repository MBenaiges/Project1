'use strict'
class Platform{
  constructor(canvas, x,y,sizeX, sizeY){
    this.x = x;
    this.y = y;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.speed = 2;  //speed = 0 => plataforma fija
    this.direction = -1;
  }

  update(){
    this.x = this.x + this.direction*this.speed;
    this.sizeX = this.sizeX;
    this.sizeY = this.sizeY;
  }

  draw(){
    this.ctx.fillStyle ="red";
    this.ctx.fillRect(this.x, this.y, this.sizeX, this.sizeY);
  }
  
}