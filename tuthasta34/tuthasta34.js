// var r=0 // 2.4 función map
// var b=0
// var pnt={ // 2.5 función random
//   x:100,
//   y:100
// };
// var col={ // 2.5 función random
//   r:255,
//   g:0,
//   b:255
// };
var velX=3 //3.3 condicionales. Pelota que rebota
var x=100 //3.3 condicionales. Pelota que rebota
var diameter=100 //3.3 condicionales. Pelota que rebota
var presionado=false //3.4 variables booleanas. true y false siempre en MINÚSCULAS.

var c=0


function setup() {
        createCanvas(600,400);
        // background(0);
}

function draw() {
  stroke(255);
  strokeWeight(4);
  noFill()
  if (presionado) { //3.4 variables booleanas
    background(0,255,0);
  } else {
      background(0);
  }



  // if (mouseX>300){ //3.3 condicionales. PRIMERO la condición mayor
  //   fill(0,255,0);
  //   ellipse(300,200,100,100)
  // } else if (mouseX>50){ //3.3 condicionales. QUÉ PASA si bajo y pongo if
  //   fill(255,0,0);
  //   rect(250,150,100,100);
  // } else if (mouseX>20){
  //   line(0,0,width,height);
  // } else {
  //   ellipse(200,200,50,50);
  // }
  if ((mouseX>=x && mouseX<=x+diameter/2) || (mouseX>=x-diameter/2 && mouseX<=x)) {
    fill(random(0,255),0,random(0,255));
  }

  ellipse(x,200,diameter,diameter); //3.3 condicionales. Pelota que rebota
  if (x>width-diameter/2 || x<0+diameter/2){ //3.3 condicionales. Pelota que rebota
    velX=velX*-1; //3.3 condicionales. Pelota que rebota
  } //3.3 condicionales. Pelota que rebota
  x=x+velX; //3.3 condicionales. Pelota que rebota


  ellipse(c,100,75,75);
  ellipse(c+20,100,75,75);
  ellipse(c+40,100,75,75);
  ellipse(c+80,100,75,75);
  ellipse(c+160,100,75,75);

  c=c+velX*2;




  // col.r=random(0,255); // 2.5 función random
  // col.b=random(0,255);
  // pnt.x=random(0,600);
  // pnt.y=random(0,400);
  // noStroke(); // 2.5 función random
  // fill(col.r,col.g,col.b,120); // 2.5 función random
  // ellipse(pnt.x,pnt.y,24,24);
  // r=map(mouseX,0,640,0,255); // 2.4 función map
  // b=map(mouseX,0,640,255,0);
  // background(r,0,b);
  // fill(0,100,100);
  // stroke(0,0,255);
  // ellipse(mouseX,mouseY,50,50);

}

function mousePressed() { //3.4 variables booleanas. mousePressedpor fuera de draw
  if ((mouseX>=x && mouseX<=x+diameter/2) || (mouseX>=x-diameter/2 && mouseX<=x)) {
  //   if (presionado) {
  //     presionado=false;
  //   } else {
  //     presionado=true;
  //   }
  //  }
    presionado=!presionado //3.4 variables booleanas. Las últimas 6 lineas pueden ser reemplazadas por esta última
  }
}
