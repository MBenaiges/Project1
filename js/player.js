'use strict'
class Player{
  constructor(canvas, lives){
    this.sizeX = 40;
    this.sizeY = 80;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x = 10 + this.sizeX/2;
    this.y = this.canvas.height/2;
    this.speed = 3;
    this.direction = 0;
    this.lives = lives;
  }

  update(){
    this.y = this.y + this.direction * this.speed;
  };

  draw(){
    this.ctx.fillStyle="blue";
    this.ctx.fillRect(this.x - this.sizeX/2, this.y - this.sizeX/2, this.sizeX, this.sizeY);
  }

  setDirection(direction){
    this.direction = direction;
  }

  checkCollisionScreen(){
    if (this.y - this.size/2 <= 0){
      this.direction = 1
    } else if (this.y + this.size/2 >= this.canvas.height){
      this.direction = -1;
    };
  }
}