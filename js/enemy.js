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
    this.count = 0;
    this.imageX = 0;
    this.IMAGE_NUMBER = 3;
    this.COUNTER_FRAMES = 5;
  }

  update(){
    this.x = this.x + this.direction*this.speed;
  }

  // IMAGEN ESTATICA
  draw(){
    //imagen enemigo

    this.count ++;
    if (this.count === this.COUNTER_FRAMES && this.imageX < this.size * this.IMAGE_NUMBER) {
      this.imageX += this.size;
      this.count = 0;
    } else if (this.count === this.COUNTER_FRAMES && this.imageX >= this.size * this.IMAGE_NUMBER) {
      this.imageX = 0;
      this.count = 0;
    }
    var img1 = new Image();
    img1.src ="img/enemy.png";
    this.ctx.drawImage(img1,this.imageX,0, this.size, this.size, this.x, this.y-this.size/2, this.size, this.size);
    //this.ctx.drawImage
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
