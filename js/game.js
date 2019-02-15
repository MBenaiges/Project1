'use strict'

class Game {
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.player;
    this.map;
    this.enemies = [];
    this.isGameOver = false;
  };

  startLoop(){
    //Comprobamos k ejecuta el loop
    console.log("execute loop");
    this.map = new Map (this.canvas);
    this.player = new Player(this.canvas, 3);  //vidas
    const loop = () => {
      //imprimimos enemigos
      if (Math.random() > 0.99){ 
        //lugar por donde queremos que salgan los enemigos
        const y =  this.canvas.height - 82;
        this.enemies.push(new Enemy(this.canvas, y))
      }
      //dentro del loop
      //console.log("dentro del loop");
      this.checkAllCollisions();
      this.updateCanvas();
      this.clearCanvas();
      this.drawCanvas();
      if(!this.isGameOver){
        window.requestAnimationFrame(loop);
      }
      
    }
    window.requestAnimationFrame(loop);
  };

  updateCanvas(){
    this.map.update();
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
        //this.player.loseLive()
          if (this.player.lives===0){
            this.isGameOver = true;
            this.onGameOver();
          }
        }
      
      });
    }
  
  gameOverCallBack(callback){
    this.onGameOver = callback;
  }
}