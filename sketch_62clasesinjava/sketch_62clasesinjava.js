// Trabajar en ATOM: Las palabras clave let, const y class son parte de ES6 (ECMAScript 6),
// que es la versión más reciente de javascript que fue ES5. Actualmente, no todos los
// navegadores lo admiten todavía y te darán un error y supongo que el editor P5 tampoco lo admite.
// Si estás usando el editor de p5 es probable que necesite usar otro editor como Atom,
// echa un vistazo a su video p5js flujo de trabajo que subió hace unos días: https://www.youtube.com/watch?v=HZ4D3wDRaec
// Va sobre la configuración de un entorno para P5﻿
var lis_burbujas=[];
let burbuja1;
let burbuja2;
let burbuja3;


function setup() {
  createCanvas(600,600);
  burbuja1=new Burbuja();
  burbuja2=new Burbuja();
  burbuja3=new Burbuja();
  print(burbuja1.x, burbuja1.y);
}

function draw() {
  background(0);
  burbuja1.mover();
  burbuja1.rebotar();
  burbuja1.mostrar();
  burbuja2.mover();
  burbuja2.rebotar();
  burbuja2.mostrar();
  burbuja3.mover();
  burbuja3.rebotar();
  burbuja3.mostrar();
  // lis_burbujas[lis_burbujas.length-1].mostrar()
  // lis_burbujas[lis_burbujas.length-1].rebotar();
  // lis_burbujas[lis_burbujas.length-1].mostrar();




}

class Burbuja {
  constructor(){
    this.posX=random(0,200);
    this.posY=random(0,150);
    this.velX=random(1,3);
    this.velY=random(1,4);
    this.diametro=random(60,100)
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

// function mousePressed(){
//   burbuja=new Burbuja
//   lis_burbujas.push(burbuja)
// }
