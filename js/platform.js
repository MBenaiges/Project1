'use strict'
class Platform{
  constructor(canvas, x,y,sizeX, sizeY, numImage){
    this.x = x;
    this.y = y;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.speed = 2;  //speed = 0 => plataforma fija
    this.direction = -1;
    this.numImage = numImage;
  }

  update(){
    this.x = this.x + this.direction*this.speed;
    this.sizeX = this.sizeX;
    this.sizeY = this.sizeY;
  }

  draw(){
    this.ctx.fillStyle = "#5A2C2C";
    this.ctx.fillRect(this.x, this.y, this.sizeX, this.sizeY);
    
    if (this.numImage === "img1"){
      var img1 = new Image();
      img1.src = "img/plat-1.png";
      this.ctx.drawImage(img1,this.x,this.y);
    }
    
    if (this.numImage === "img2"){
      var img2 = new Image();
      img2.src = "img/plat-2.png";
      this.ctx.drawImage(img2,this.x,this.y);
    }

    if (this.numImage === "img3"){
      var img3 = new Image();
      img3.src = "img/plat-3.png";
      this.ctx.drawImage(img3,this.x, this.y);
    }

    if (this.numImage === "img4"){
      var img4 = new Image();
      img4.src = "img/plat-4.png";
      this.ctx.drawImage(img4,this.x, this.y);
    }
  }
  
}