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
    
    this.player = new Player(this.canvas, 1);
    const loop = () => {
      //dentro del loop
      //console.log("dentro del loop");
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
    this.player.update();
  };

  clearCanvas(){
    this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
  };

  drawCanvas(){
    this.player.draw();

  };

  checkAllCollisions(){
    this.player.checkCollisionScreen();
  };

  gameOverCallBack(callback){
    this.onGameOver = callback;
  }
}