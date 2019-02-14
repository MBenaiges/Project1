'use strict'
class Player{
  constructor(canvas, lives){
    this.size = 60;
    //this.sizeY = 80;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x = 10 + this.size/2;
    //altura para empezar en la pantalla
    this.y = this.canvas.height+this.size+30;
    this.speed = 3.5;
    this.direction = 0;
    this.jump=0;
    // gravedad??
    this.gravity= .25;
    //si no esta saltando
    this.noJumping=true; 
    this.lives = lives;
  }

  update(){
    this.x = this.x + this.direction * this.speed;
    //si esta saltando
    if (this.noJumping === false){
      this.y = this.y + this.jump;
      this.jump = this.jump + this.gravity
    }
    
  };

  draw(){
    this.ctx.fillStyle="blue";
    this.ctx.fillRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
  }

  setDirection(direction){
    this.direction = direction;
  }

  checkCollisionScreen(){
    if (this.y - this.size/2 <= 0){
      //this.direction = 0;
    } else if (this.y + this.size/2 >= this.canvas.height){
      this.noJumping = true;
      this.y = this.canvas.height - this.size/2 -5;
    }

    if (this.x + (this.size/2) >= this.canvas.width){
      this.direction = 0;
      this.x = this.canvas.width - this.size/2 - 10;
    }else if (this.x - (this.size/2) <= 0){
      this.direction = 0;
      this.x = this.size/2;
    }
  };
}