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
    //this.ctx.fillStyle = "#5A2C2C";
    //this.ctx.fillRect(this.x, this.y, this.sizeX, this.sizeY);
    
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

    if (this.numImage === "img5"){
      var img5 = new Image();
      img5.src = "img/plat-5.png";
      this.ctx.drawImage(img5,this.x, this.y);
    }

    if (this.numImage === "img6"){
      var img6 = new Image();
      img6.src = "img/plat-6.png";
      this.ctx.drawImage(img6,this.x, this.y);
    }

    if (this.numImage === "img7"){
      var img7 = new Image();
      img7.src = "img/plat-7.png";
      this.ctx.drawImage(img7,this.x, this.y);
    }

    if (this.numImage === "img8"){
      var img8 = new Image();
      img8.src = "img/plat-8.png";
      this.ctx.drawImage(img8,this.x, this.y);
    }

    if (this.numImage === "img9"){
      var img9 = new Image();
      img9.src = "img/plat-9.png";
      this.ctx.drawImage(img9,this.x, this.y);
    }

    if (this.numImage === "img10"){
      var img10 = new Image();
      img10.src = "img/plat-10.png";
      this.ctx.drawImage(img10,this.x, this.y);
    }

    if (this.numImage === "img11"){
      var img11 = new Image();
      img11.src = "img/plat-11.png";
      this.ctx.drawImage(img11,this.x, this.y);
    }

    if (this.numImage === "img12"){
      var img12 = new Image();
      img12.src = "img/plat-12.png";
      this.ctx.drawImage(img12,this.x, this.y);
    }

    if (this.numImage === "img13"){
      var img13 = new Image();
      img13.src = "img/plat-13.png";
      this.ctx.drawImage(img13,this.x, this.y);
    }    
  }
}