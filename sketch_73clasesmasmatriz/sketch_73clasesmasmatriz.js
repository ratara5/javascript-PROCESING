// Trabajar en ATOM: Las palabras clave let, const y class son parte de ES6 (ECMAScript 6),
// que es la versión más reciente de javascript que fue ES5. Actualmente, no todos los
// navegadores lo admiten todavía y te darán un error y supongo que el editor P5 tampoco lo admite.
// Si estás usando el editor de p5 es probable que necesite usar otro editor como Atom,
// echa un vistazo a su video p5js flujo de trabajo que subió hace unos días: https://www.youtube.com/watch?v=HZ4D3wDRaec
// Va sobre la configuración de un entorno para P5﻿
var burbujas=[];

// let burbuja1; // Antiguo
// let burbuja2;
// let burbuja3;


function setup() {
  createCanvas(600,600);
  for (let i=0;i<=3;i++)
    burbujas[i]=new Burbuja(10*i+10,10*i+10,random(10,50));
    // burbujas[0]=new Burbuja() //Antiguo
    // burbujas[1]=new Burbuja();
    // burbujas[2]=new Burbuja();
  // print(burbujas[0].x, burbujas[0].y);
}

function draw() {
  background(0);
  for (let i=0;i<burbujas.length;i++){ // se puede reemplazar por: for (let burbuja in burbujas){
    burbujas[i].mover();               // burbuja.move();
    burbujas[i].rebotar();             // burbuja.rebotar();
    burbujas[i].mostrar();             // burbuja.mostrar();
  }


  // burbujas[0].mover(); // Antiguo
  // burbujas[0].rebotar();
  // burbujas[0].mostrar();
  // burbujas[1].mover();
  // burbujas[1].rebotar();
  // burbujas[1].mostrar();
  // burbujas[2].mover();
  // burbujas[2].rebotar();
  // burbujas[2].mostrar();
  // lis_burbujas[lis_burbujas.length-1].mostrar()
  // lis_burbujas[lis_burbujas.length-1].rebotar();
  // lis_burbujas[lis_burbujas.length-1].mostrar();




}

class Burbuja {
  constructor(_x,_y,_diam){
    this.posX=_x;
    this.posY=_y;
    this.velX=random(1,3);
    this.velY=random(1,4);
    this.diametro=_diam
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

function mousePressed(){
  let dmt=random(10,50);
  let b=new Burbuja(mouseX,mouseY,dmt)
  burbujas.push(b)
}

function mouseDragged(){
  let dmt=random(10,50);
  let b=new Burbuja(mouseX,mouseY,dmt)
  burbujas.push(b)
}
