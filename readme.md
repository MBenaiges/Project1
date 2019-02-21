# Plat4ms

## Descripción

Juego de plataforma en la que el jugador se deplazara por el mapa.
Podrá saltar por las diferentes plataformas, recoger objetos de vida o puntuación 
y matar enemigos saltando encima de ellos


## MVP - Tecnología (DOM - CANVAS)

El juego está hecho en Canvas

## Backlog
- Refactorización del código
- Más enemigo
- Más niveles

## Estructuras de Datos

### main.js
- main()
- buildDom()
- buildSplashScreen()
- buildGameScreen()
- buildLevelComplete()
- buildGameOver()
      
### Class game.js
- this.map
- this.player
- this.canvas
- this.ctx
- this.enemies;
- this.flyers
- this.platforms
- this.isGameOver
- this.levelComplete
- this.itemsLife
- this.itemsPoints
- startloop();
- updateCanvas();
- clearCanvas();
- drawCanvas();
- checkCollisions();
- levelCompleteCallback();
- gameOverCallBack()
      
### Class player.js
- this.live
- this.canvas
- this.ctx
- this.x
- this.y
- this.speed
- this.direction
- this.gravity
- this.maxGravity
- this.peso
- this.jump
- this.noJumping
- this.lives
- this.kill
- this.isInmortal
- this.count
- this.countJump
- this.imageX
- this.IMAGE_NUMBER
- this.COUNTER_FRAMES
- this.IMAGE_NUMBER_JUMP
- this.COUNTER_FRAME_JUMP
- this.points 
- immo()
- update()
- draw()
- setDirection()
- checkCollisionPlatform()
- checkCollisionScreen()
- checkCollisionEnemy()
- checkCollisionItem()
- loseLive()
- getPoints()
- getPointsItem()
- getLives()

### Class map.js
- this.x
- this.y
- this.sizeX
- this.sizeY
- this.direction
- this.speed
- this.canvas
- this.ctx
- update()
- draw()
      
### Class enemy.js
- this.size
- this.canvas
- this.ctx
- this.x
- this.y
- this.speed
- this.direction
- this.count
- this.imageX
- this.IMAGE_NUMBER
- this.COUNTER_FRAMES
- update()
- draw()

### Class platform.js
- this.x
- this.y
- this.sizeX
- this.sizeY
- this.canvas
- this.ctx
- this.speed
- this.direction
- this.numImage;
- update()
- draw()

### Class items.js (life & points)
- this.size
- this.canvas
- this.ctx
- this.x
- this.y
- this.direction
- this.speed
- draw()
- update()

## States y States Transitions

Definicion del las transiciones del juego y del main.

- splashScreen
- gameScreen
- gameoverScreen
- levelCompleteScreen


"splashScreen" -> "gameScreen" -> "gameOverScreen" -> "gameScreen"
                               -> "levelCompleteScreen" -> "gameScreen"
                                                        -> "splashScreen"

Desde "gameOverScreen" poder ir a "gameScreen"
Desde "levelCompleteScren" podemos ir a "splashScreen" o "gameScreen"

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

### Git

Repository -> https://github.com/MBenaiges/Project1/

Deploy -> https://mbenaiges.github.io/plat4ms/

### Slides.com

Link presentación:

https://slides.com/mbenaiges/deck/#/

## Instrucciones del juego 

CONTROLS
-----------
Left arrow - Move left
Right arrow - Move right
space - jump

ITEMS
---------
Rice - +1 Life
Ball - +500 points




      
