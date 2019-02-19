'use strict'
class Player{
  constructor(canvas, lives){
    this.size = 70;

    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x = 10 + this.size/2;
    this.y = this.canvas.height;
    this.speed = 5;
    this.direction = 0;
    this.gravity= 0;
    this.maxGravity =8;
    this.peso=.5;
    this.jump=-10;
    this.noJumping=true; 
    this.lives = lives;
    this.kill = false;
    this.isImmortal = false;
    //SPRITE
    this.count = 0;
    this.countJump = 0;
    this.imageX = 0;
    this.IMAGE_NUMBER = 3;
    this.COUNTER_FRAMES = 8;

    this.IMAGE_NUMBER_JUMP = 2;
    this.COUNTER_FRAME_JUMP = 10;
  }
  
  //immo(){
  //  if(this.isImmortal=true){

  //  }
  //}
  

  update(){
    this.x = this.x + this.direction * this.speed;
    this.y += this.gravity;
    //si esta saltando
    if(this.gravity < this.maxGravity){
      this.gravity += this.peso;
    }
  };

  draw(){
    //this.ctx.fillStyle="blue";
    //this.ctx.fillRect(this.x, this.y, this.size, this.size);
    this.count ++;
    if (this.count === this.COUNTER_FRAMES && this.imageX < this.size * this.IMAGE_NUMBER) {
      this.imageX += this.size;
      this.count = 0;
    } else if (this.count === this.COUNTER_FRAMES && this.imageX >= this.size * this.IMAGE_NUMBER) {
      this.imageX = 0;
      this.count = 0;
    }
    
    if(this.direction===1){
      var imgPlayer = new Image();
      imgPlayer.src = "img/playerRight.png";
      this.ctx.drawImage(imgPlayer,this.imageX,0, this.size, this.size, this.x, this.y, this.size, this.size);
    }
    if (this.direction===-1){
      var imgPlayer = new Image();
      imgPlayer.src = "img/playerLeft.png";
      this.ctx.drawImage(imgPlayer,this.imageX,0, this.size, this.size, this.x, this.y, this.size, this.size);
    }
    if(this.direction===0){
      var imgPlayer = new Image();
      imgPlayer.src = "img/stop-right.png";
      this.ctx.drawImage(imgPlayer,this.x, this.y);
    }
    this.countJump ++;
    if (this.count === this.COUNTER_FRAMES_JUMP && this.imageX < this.size * this.IMAGE_NUMBER_JUMP) {
      this.imageX += this.size;
      this.countJump = 0;
    } else if (this.count === this.COUNTER_FRAMES_JUMP && this.imageX >= this.size * this.IMAGE_NUMBER_JUMP) {
      this.imageX = 0;
      this.countJump = 0;
    }
    if(this.gravity > 1){
      var imgPlayer = new Image();
      imgPlayer.src = "img/player-jump.png";
      this.ctx.drawImage(imgPlayer,this.imageX,0, this.size, this.size, this.x, this.y, this.size, this.size);
    }

  }

  setDirection(direction){
    this.direction = direction;
  }

  checkCollisionPlatform(platform){
    if(this.x < platform.x + platform.sizeX &&
      this.x + this.size > platform.x &&
      this.y < platform.y + platform.sizeY &&
      this.size + this.y > platform.y ){
        //de arriba hacia abajo
        if((this.y + this.size) < platform.y + this.gravity){
          this.gravity = 0;
          this.y = platform.y - this.size;
          this.noJumping=true;
        }
        // de abajo hacia arriba
        if(this.y - this.gravity > (platform.y+platform.sizeY)){
          this.gravity = 1;
          this.y = platform.y - this.size; 
        }
        return true;
      } else{
      return false;
      }

    
  };
    
  checkCollisionScreen(){
    if (this.y - this.size <= 0){
      //this.direction = 0;
    } else if (this.y + this.size >= this.canvas.height -68){ //- "rebote" que hace en el suelo
      this.noJumping = true;
      this.y = this.canvas.height - this.size -65; 
      this.gravity=0;//65px de la altura del supuesto suelo
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
    const collRigth = this.x + this.size  > enemy.x; 
    const collLeft = this.x < enemy.x + enemy.size;
    const collTop = this.y < enemy.y + enemy.size;
    const collBottom = this.y + this.size > enemy.y;

    const isColliding = collRigth && collLeft &&  collBottom && collTop;
    
    if(this.gravity && isColliding){
      this.kill = true;
    }      
    if (isColliding){
      return true;
    }
    return false;
  }
  
  loseLive(){
    this.lives--;
  }

}