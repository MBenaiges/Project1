'use strict'
class Flyer{
  constructor(canvas,y){
    this.canvas = canvas;
    this.y = y;
    this.x = 20;
    this.sizeX = 45;
    this.sizeY = 20;
    this.ctx = this.canvas.getContext('2d');
    this.speed = 9;
    this.direction = 1;
  }

  update(){
    this.x = this.x + this.direction*this.speed;
  }

  draw(){
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(this.x,this.y, this.sizeX,this.sizeY)
  }
} 