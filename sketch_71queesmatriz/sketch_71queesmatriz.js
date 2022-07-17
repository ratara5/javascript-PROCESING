var nums=[10, 20, 30, 40];
var num=23;
var palabras=["yo","tú","él","ella","eso","nosotros","ustedes","ellos(as)","quiénes?","qué?"]
var j=0

function setup() {
  createCanvas(400,400)
}
function draw(){
  background(0);
  fill(255);
  for (var i=0;i<=nums.length;i++){
    ellipse(i*75+75,70,nums[i],nums[i]);
  }
  fill(0,0,255);
  textSize(32);
  text(palabras[j],10,200)
}

function mousePressed(){
  j++
  if (j==palabras.length){
    j=0;
  }
}
