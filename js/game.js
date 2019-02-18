'use strict'

class Game {
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.player;
    this.map;
    this.enemies = [];
    this.flyers = [];
    this.platforms = [];
    this.isGameOver = false;
    this.levelComplete = false;
  };

  startLoop(){
    //Comprobamos k ejecuta el loop
    console.log("execute loop");
    this.map = new Map (this.canvas);
    //Plataforma - con textura
    this.platforms.push(new Platform(this.canvas, 500, 255, 250, 85,"img1"));
    this.platforms.push(new Platform(this.canvas, 750, 200, 100, 135,"img2"));
    this.platforms.push(new Platform(this.canvas, 850, 200, 500, 20, "img3"));
    this.platforms.push(new Platform(this.canvas,1350, 200, 75, 135,"img4"));
    //nuevas - OK
    this.platforms.push(new Platform(this.canvas,2000,250,300,85));
    this.platforms.push(new Platform(this.canvas,2100,150,500,185));
    this.platforms.push(new Platform(this.canvas,3000,240,1000,95));
    this.platforms.push(new Platform(this.canvas,3150,150,250,90));
    this.platforms.push(new Platform(this.canvas,3600,150,250,90));
    this.platforms.push(new Platform(this.canvas,4900,250,80,40));
    this.platforms.push(new Platform(this.canvas,5000,175,60,40));
    this.platforms.push(new Platform(this.canvas,5140,85,600,250));
    this.platforms.push(new Platform(this.canvas,6000,200,100,135));
    this.platforms.push(new Platform(this.canvas,6200,250,200,85));
    

    
    this.player = new Player(this.canvas, 1);  //vidas
    const loop = () => {
      //console.log(game.player.gravity);
      //imprimimos enemigos
      if (Math.random() > 0.99){ 
        //lugar por donde queremos que salgan los enemigos
        const y =  this.canvas.height - 82;
        this.enemies.push(new Enemy(this.canvas, y))
      }

       /* ENEMIGOS VOLADORES 
      if (Math.random() > 0.995){ 
        const y =  this.canvas.height - 380;
        this.flyers.push(new Flyer(this.canvas, y))
      }
      */

      //dentro del loop
      this.checkAllCollisions();
      this.updateCanvas();
      this.clearCanvas();
      this.drawCanvas();
      if(!this.isGameOver && !this.levelComplete){
        window.requestAnimationFrame(loop);
      }
      
    }
    window.requestAnimationFrame(loop);
  };

  updateCanvas(){
    this.map.update();
    this.flyers.forEach((flyer) => {
      flyer.update();
    })
    this.platforms.forEach((platform) => {
      platform.update();
    })
    this.player.update();
    
    this.enemies.forEach((enemy) => {
      enemy.update();
    })
    
 };

  clearCanvas(){
    this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
  };

  drawCanvas(){
    this.map.draw(); 
    this.flyers.forEach((flyer) => {
      flyer.draw();
    })  
    this.platforms.forEach((platform) => {
      platform.draw();
    })
    this.player.draw();
    
    this.enemies.forEach((enemy) => {
      enemy.draw();
    })
  };

  checkAllCollisions(){
    this.player.checkCollisionScreen();
    //comprobar colision con enemigos
    this.enemies.forEach((enemy, index) =>{
      if(this.player.checkCollisionEnemy(enemy, index)){
        //si hay colision
        console.log("golpe!");
        this.enemies.splice(index,1);
        //this.player.loseLive() //-- <Desactivar muerte
          if (this.player.lives===0){
            this.isGameOver = true;
            this.onGameOver();
          }
        }
      });
      this.platforms.forEach((platform, index) =>{
        if(this.player.checkCollisionPlatform(platform, index)){
          //console.log("platform")
        }
      });
      

      //para ganar
      if (this.player.x >= 700 && this.map.speed === 0){
        this.levelComplete = true;
        this.onLevelCompete();
      }
    }
  
  levelCompleteCallback(callback){
    this.onLevelCompete = callback;
  }

  gameOverCallBack(callback){
    this.onGameOver = callback;
  }

}