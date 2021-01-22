var Background,backImage;
var Door,doorImage,Climber,climberImage,climberGroup,doorGroup;
var num;
var ghost,ghostImage;



function preload(){
  
  backImage=loadImage("tower.png");
  doorImage=loadImage("door.png");
  ghostImage=loadImage("ghost-standing.png")
  climberImage=loadImage("climber.png")
  climberGroup=new Group();
  doorGroup=new Group();
}

function setup(){
  
createCanvas(600,600);
  
  Background=createSprite(300,300,600,600);
  Background.addImage(backImage);
  Background.velocityY=1;
  
  ghost=createSprite(300,300,20,20);
  ghost.addImage(ghostImage);
  ghost.scale=0.4;
}

function draw(){
  background(255)
  
  if(Background.y>600){
    Background.y=300;
  }
  
  spawnDoors();
  
  if(keyDown("Space")){
    ghost.velocityY=-10;
    
  }
  
  ghost.velocityY=ghost.velocityY+ 0.8;
  if(keyDown("right")){
    ghost.x=ghost.x+3;
  }
  if(keyDown("left")){
    ghost.x=ghost.x-3;
  }
  
    if(climberGroup.isTouching(ghost)){
     ghost.velocityY=0;
     text("Game Over",300,300);
   }   
     if(doorGroup.isTouching(ghost)){
       ghost.velocityY=0;
     }
  
  
  
  
  drawSprites();
}


function spawnDoors(){
    if(frameCount%200===0){
num=Math.round( random(100,500));
       Door=createSprite(num,0,20,20);
      Climber=createSprite(num,50,20,20)
  Door.addImage(doorImage);
  Door.velocityY=1;
  Climber.addImage(climberImage);  
  Climber.velocityY=1;
      
      
      ghost.depth=Door.depth;
      ghost.depth=Climber.depth;
      ghost.depth=ghost.depth+1;
      
      
      

  climberGroup.add(Climber);
      doorGroup.add(Door);
      
 
    }
      
  }









