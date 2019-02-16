'use strict'

class Game {
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.player;
    this.platform;
    this.map;
    this.enemies = [];
    this.isGameOver = false;
    this.levelComplete = false;
  };

  startLoop(){
    //Comprobamos k ejecuta el loop
    console.log("execute loop");
    this.map = new Map (this.canvas);
    /**IMPRESION OBSTACULO**/
    console.log("pintamos obstaculo");
    this.platform = new Platform (this.canvas, 500, 250, 100, 10);
    console.log("obstaculo pintado");
    /**IMPRESION OBSTACULO**/
    this.player = new Player(this.canvas, 1);  //vidas
    const loop = () => {
      //imprimimos enemigos
      if (Math.random() > 0.99){ 
        //lugar por donde queremos que salgan los enemigos
        const y =  this.canvas.height - 82;
        this.enemies.push(new Enemy(this.canvas, y))
      }
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
    this.platform.update();
    this.player.update();
    this.enemies.forEach((enemy) => {
      enemy.update();
    })
 };

  clearCanvas(){
    this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
  };

  drawCanvas(){
    //Imprimir mapa
    this.map.draw();  
    this.platform.draw();
    this.player.draw();
    this.enemies.forEach((enemy) => {
      enemy.draw();
    })
      
  };

  checkAllCollisions(){
    //this.player.checkCollisionsPlatform();
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