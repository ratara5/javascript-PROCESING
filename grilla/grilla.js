function setup() {
  createCanvas(600,600);

}

function draw() {
  background(255);
  for (var x=0; x<=width; x+=50){
    strokeWeight(4);
    line(x,0,x,600); 
  }
  for (var y=0;y<=height;y+=50){
    strokeWeight(4);
    line(0,y,600,y);
}
}
