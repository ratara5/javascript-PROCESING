var bola={
  posX:100,
  posY:100,
  velX:4,
  velY:3,
  diametro:30
 }


function setup() {
  createCanvas(600,600)
}

function draw() {
  background(0)
  mover();
  rebotar();
  mostrar(); 
}

function mover(){
  bola.posX+=bola.velX
  bola.posY+=bola.velY 
}

function rebotar(){
  if (bola.posX>=width-bola.diametro/2 || bola.posX<=0+bola.diametro/2) {
    bola.velX*=-1
  }
  if (bola.posY>=height-bola.diametro/2 || bola.posY<=0+bola.diametro/2) {
    bola.velY*=-1
  }
}

function mostrar(){
  stroke(255)
  strokeWeight(3)
  fill(0,0,255)
  ellipse(bola.posX,bola.posY,bola.diametro,bola.diametro)
}
