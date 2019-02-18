# Plat4ms

## Descripción

Juego de plataforma en la que un jugador se deplazara por el mapa esquivando obstáculos.

## MVP - Tecnología (DOM - CANVAS)

Para el juego utilizaré CANVAS.

## Backlog
- Más plataformas
- Movimiento del mapa NO automatico
- "Consumibles"
- Ranking

## Estructuras de Datos

### main.js
- main()
- buildDom()
- buildSplashScreen()
- buildGameScreen()
- buildGameOverScreen()
      
### Class game.js
- this.map
- this.player
- this.canvas
- this.ctx
- startloop();
- updateCanvas();
- crealCanvas();
- drawCanvas();
- checkCollisions();
      
### Class player.js
- this.live
- this.x
- this.y
- this.sizeX
- this.sizeY
- this.gravedad
- this.canvas
- this.ctx
- this.direction*
- this.speed
- update();
- draw();
- checkCollisions();
- jump();
      
### Class map.js
- this.x
- this.y
- this.sizeX
- this.sizeY
- this.direction*
- this.speed
- update()
- draw()
      
### Class enemy.js
- this.x
- this.y
- this.sizeX
- this.sizeY
- this.canvas
- this.ctx
- this.direction*
- this.velocity*
- update();
- draw();

## States y States Transitions

Definicion del las transiciones del juego y del main.

- splashScreen
- gameScreen
- gameoverScreen


"splashScreen" -> "gameScreen" -> "gameOverScreen" -> "gameScreen"

Desde "gameOverScreen" poder ir a "gameScreen"

## Task

- Crear splashScreen
- Crear gameScreen
- Crear gameOverScreen
- Crear la transicion de pantallas
- Crear el canvas en el gameScreen
- Añadir jugador
- Añadir loop al jugador
- Crear logica de salto de jugador
- Añadir mapa
- Añadir enemigos

## Links

### Trello

[Link url](https://trello.com)

### Git

Repository -> https://github.com/MBenaiges/Project1/

Deploy -> https://mbenaiges.github.io/project1/

### Slides.com

Especificar la url de la presentacion

[Link Slides.com](http://slides.com)

## Instrucciones del juego 

Al finalizar el juego generar las instrucciones




      
