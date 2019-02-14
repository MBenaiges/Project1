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
    
    const loop = () => {
      //dentro del loop
      console.log("dentro del loop");
      this.updateCanvas();
      this.clearCanvas();
      this.drawCanvas();
    }
    window.requestAnimationFrame(loop);
  };

  updateCanvas(){
  };

  clearCanvas(){
    this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
  };

  drawCanvas(){

  };

  gameOverCallBack(callback){
    this.onGameOver = callback;
  }
}