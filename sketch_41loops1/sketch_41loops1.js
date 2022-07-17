var offset=0

function setup() {
  createCanvas(1200,680);

}

function draw() {
  background(0);
  var diameter=30
  for (var x=0; x<=width;x+=50){
    noStroke()
    fill(random(0,255),0,x*random(0,255));
    ellipse(x+offset, 100, diameter+x/50,diameter+x/50);
    fill(x*255/1200,x*255/1200,0);
    ellipse(x,300,diameter-x/50,diameter-x/50);
  }
  offset++
  
}
