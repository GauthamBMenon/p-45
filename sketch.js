var plainimg, plain1                                                                                                             
function preload () {
  plainimg =loadImage ("PLAIN_TAKE_OFF.jpg")
}                     

function setup() {
  createCanvas(800,400);
 plain1=createSprite (400,200)
 plain1.addImage(plainimg)
}

function draw() {
  background("black");  
  

  drawSprites();
}