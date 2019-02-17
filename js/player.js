'use strict'
class Player{
  constructor(canvas, lives){
    this.size = 70;
    //this.sizeY = 80;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x = 10 + this.size/2;
    this.y = this.canvas.height;
    this.speed = 3.5;
    this.direction = 0;
    this.jump=0;
    // gravedad
    this.gravity= .30;
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
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  setDirection(direction){
    this.direction = direction;
  }

  
  checkCollisionScreen(){
    if (this.y - this.size <= 0){
      this.direction = 0;
    } else if (this.y + this.size >= this.canvas.height -68){ //- "rebote" que hace en el suelo
      this.noJumping = true;
      this.y = this.canvas.height - this.size -65; //65px de la altura del supuesto suelo
    }

    if (this.x + this.size >= this.canvas.width){
      this.direction = 0;
      this.x = this.canvas.width - this.size;  //parte lateral de la pantalla izquierda
    }else if (this.x <= 0){
      this.direction = 0;
      this.x = this.size-this.size+1;
    }
  };

  // colision perder vida
  checkCollisionEnemy(enemy){
    const collRigth = this.x + this.size  > enemy.x; // > s
    const collLeft = this.x < enemy.x + enemy.size;
    const collTop = this.y < enemy.y + enemy.size;
    const collBottom = this.y + this.size > enemy.y;

    if (collRigth && collLeft && collTop && collBottom){ //no activamos colision por top
      return true;
    }
    return false;
  }
  
  checkCollisionPlatform(platform){
    if(this.x < platform.x + platform.sizeX &&
      this.x + this.size > platform.x &&
      this.y < platform.y + platform.sizeY &&
      this.size + this.y > platform.y ){
        return true
      }
      return false;
  }
  
  
  // contador para perder vida
  loseLive(){
    this.lives--;
  }

}