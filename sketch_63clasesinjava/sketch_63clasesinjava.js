// Trabajar en ATOM: Las palabras clave let, const y class son parte de ES6 (ECMAScript 6),
// que es la versión más reciente de javascript que fue ES5. Actualmente, no todos los
// navegadores lo admiten todavía y te darán un error y supongo que el editor P5 tampoco lo admite.
// Si estás usando el editor de p5 es probable que necesite usar otro editor como Atom,
// echa un vistazo a su video p5js flujo de trabajo que subió hace unos días: https://www.youtube.com/watch?v=HZ4D3wDRaec
// Va sobre la configuración de un entorno para P5﻿

let burbuja;

function setup() {
  createCanvas(600,600);
  burbuja1=new Burbuja(100,100,random(100,200)); //Los parámetros se definen en constructor()
  burbuja2=new Burbuja(200,200,random(50,100));
  burbuja3=new Burbuja(300,300,random(20,50));
  print(burbuja1.x, burbuja1.y);
}

function draw() {
  background(255);
  burbuja1.mover();
  burbuja1.rebotar();
  burbuja1.mostrar();
  burbuja2.mover();
  burbuja2.rebotar();
  burbuja2.mostrar();
  burbuja3.mover();
  burbuja3.rebotar();
  burbuja3.mostrar();


}

class Burbuja {
  constructor(_x,_y,_diam){ //poner alguna señalización a estas variables, pues son temporales
    this.posX=_x;
    this.posY=_y;
    this.velX=random(1,3);
    this.velY=random(1,4);
    this.diametro=_diam;
    this.colorR=random(0,255)
    this.colorG=random(0,255)
    this.colorB=random(0,255)
  }
  mover(){
    this.posX+=this.velX
    this.posY+=this.velY
  }

  rebotar(){
    if (this.posX>=width-this.diametro/2 || this.posX<=0+this.diametro/2) {
      this.velX*=-1
    }
    if (this.posY>=height-this.diametro/2 || this.posY<=0+this.diametro/2) {
      this.velY*=-1
    }
  }

  mostrar(){
    noStroke()
    strokeWeight(3)
    fill(this.colorR, this.colorG,this.colorB,100) // Si pongo el random acá. Varía color rápido
    ellipse(this.posX,this.posY,this.diametro,this.diametro) // Si pongo random acá, varía diámetros rápido
  }

}
