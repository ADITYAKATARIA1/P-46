var wall , wallImg
var ground,groundImg
var aditya,adityaImg
var enemy , enemyImg
var tressure,tressureImg
function preload(){
  groundImg=loadImage("ground.png")
 wallImg=loadImage("aditya maze wall.jpg")
 adityaImg=loadImage("mario1.png")
 tressureImg=loadImage("tressure.png")
 enemyImg=loadImage("dino1.PNG")
}

function setup() {
  createCanvas(1800,900);
  
  ground=createSprite(900,875,1800,30);
  ground.addImage(groundImg)
  aditya=createSprite(50,800,40,40)
  aditya.addImage(adityaImg)
  aditya.scale=0.7

  wall1=createSprite(100,200,150,75)
  wall1.addImage("wall",wallImg)
  wall1.scale=0.5

  wall2=createSprite(250,795,75,150)
  wall2.addImage("wall",wallImg)
  wall2.scale=0.6

  wall3=createSprite(750,200,525,75)
  wall3.addImage("wall",wallImg)
  wall3.scale=0.5
  
  wall4=createSprite(350,400,525,75)
  wall4.addImage("wall",wallImg)
  wall4.scale=0.7

  wall5=createSprite(750,650,525,75)
  wall5.addImage("wall",wallImg)
  wall5.scale=0.7
   
  wall6=createSprite(1200,450,525,75)
  wall6.addImage("wall",wallImg)
  wall6.scale=0.7

  wall7=createSprite(1650,750,525,75)
  wall7.addImage("wall",wallImg)
  

  tressure=createSprite(50,50,75,75)
  tressure.addImage(tressureImg)
  tressure.scale=0.3
  enemy=createSprite(1500,400,0,50)
  enemy.addImage("enemy",enemyImg)
}

function draw() {
  background("green");  
  wall1.display()
  if(keyDown("UP")){
    aditya.velocityY=-2
    aditya.velocityX=0
  }
  if(keyDown("DOWN")){
    aditya.velocityY=2
    aditya.velocityX=0
  } 
  if(keyDown("LEFT")){
    aditya.velocityX=-2
    aditya.velocityY=0
  }
  if(keyDown("RIGHT")){
    aditya.velocityX=2
    aditya.velocityY=0
  }
  
  drawSprites();
}
