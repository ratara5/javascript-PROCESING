var posX=50
var posY=50
var n_petalos=20
var alto_tallo=50

function setup() {
  createCanvas(600,600)

}

function draw() {
  background(0,50,100)
  for (posX=50;posX<=mouseX;posX+=50){
    for (posY=50;posY<=mouseY;posY+=50){
      flor(posX,posY,n_petalos,alto_tallo)
    }
  }


}

function flor(x,y,petalos,alto){
  stroke(0);
  strokeWeight(2)
  fill(0,255,0)
  rect(x-5,y+10,10,alto)
  var ang_polig=2*PI/petalos
  var ap=30/2*cos(ang_polig/2)
  var xx=ap*cos(ang_polig)
  var yy=ap*sin(ang_polig)
  var cen_pet_X=0
  var cen_pet_Y=0
  
 
    //for (var equis=x-30/2; equis<=x+30/2; x+=0.5){
    //    for (var ye=y-30/2; ye<=y+30/2; y+=0.5){
    //      if (equis>=x && equis<=equis+30/2 && ye>=y && ye<=y+30/2){
    //        cen_pet_X=x+xx
    //        cen_pet_Y=y+yy
    //        } else if (equis>=x && equis<=equis+30/2 && ye<=y && ye>=y-30/2){
    //        cen_pet_X=x+xx
    //        cen_pet_Y=y-yy
    //        } else if (equis<=x && equis>=equis-30/2 && ye<=y && ye>=y-30/2){
    //        cen_pet_X=x-xx
    //        cen_pet_Y=y-yy
    //        } else {
    //        cen_pet_X=x-xx
    //        cen_pet_Y=y+yy
    //        }
    //        ellipse(cen_pet_X,cen_pet_Y,ap*2/sqrt(3),ap*2/sqrt(3))
    //        }
    //    }
    
    // Las coordenadas de cualquier punto de la circuncerencia son x+r*cos(angulo), y-r*sin(angulo)
    for (var i=1; i<=petalos; i++){
      cen_pet_X=x+30/2*cos(ang_polig*i)
      cen_pet_Y=y-30/2*sin(ang_polig*i)
      fill(255,0,0)
      ellipse(cen_pet_X,cen_pet_Y,ap*2/sqrt(3),ap*2/sqrt(3))
    }
    
    
    fill(255,255,0)
    ellipse(x,y,30,30)
    }
