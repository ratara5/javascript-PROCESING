
let rectangle;

function setup() {
  createCanvas(600,600);
  rectangle1=new Rectangle // Si se colocan estas lineas en draw(), se renuevan.
  rectangle2=new Rectangle
  rectangle3=new Rectangle
  rectangle4=new Rectangle
  rectangle5=new Rectangle
  rectangle6=new Rectangle

}


function draw() {
  background(0);

  rectangle1.mostrar()
  rectangle2.mostrar()
  rectangle3.mostrar()
  rectangle4.mostrar()
  rectangle5.mostrar()
  rectangle6.mostrar()

}

class Rectangle {
    constructor(){
      this.x=random(50,600)
      this.y=random(50,600)
      this.ancho=random(20,50)
      this.alto=random(20,50)
    }
    mostrar(){
      noStroke()
      fill(random(0,200),random(100,255),random(100,255))
      rect(this.x,this.y,this.ancho,this.alto)
    }
}
