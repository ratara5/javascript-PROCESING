function setup() {
  createCanvas(1200,680);

}

function draw() {
  background(0);
  var diameter=30
  for (var x=0; x<=mouseX;x+=50){
    for (var y=0;y<=mouseY;y+=50){
    noStroke()
    fill(random(0,255),0,x*random(0,255));
    ellipse(x,y,diameter+x/50,diameter+x/50);
    fill(x*255/1200,x*255/1200,0);
    ellipse(x,y,diameter-x/50,diameter-x/50);
    }
  }

}
