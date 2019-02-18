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
  
 /*SPRITE
 draw(){
  this.ctx.drawImage(this.imgGif,35*this.imageFrame,0,170,120,this.x -this.size/2,this.y-this.size/2,this.size+50,this.size);
  this.imageSpeed++;
  
 }*/
}


/*
.bg-enemy_1 {
    width: 35px; height: 35px;
    background: url('enemy.png') -10px -10px;
}
.bg-enemy_2 {
    width: 35px; height: 35px;
    background: url('enemy.png') -65px -10px;
}

.bg-enemy_3 {
    width: 35px; height: 35px;
    background: url('enemy.png') -120px -10px;
}

.bg-enemy_4 {
    width: 35px; height: 35px;
    background: url('enemy.png') -175px -10px;
}*/
