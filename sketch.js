var canvas;

var bikes, bike1, bike2, bike3, bike4;

function preload(){

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
}


function draw(){
  background("orange")
  bike1 = createSprite(100,200);  
  bike1.shapeColor="red";
  bike2 = createSprite(300,200);
  bike2.shapeColor="red";
  bike3 = createSprite(500,200); 
  bike3.shapeColor="red";
  bike4 = createSprite(700,200);
  bike4.shapeColor="red";

  
  drawSprites();

}


