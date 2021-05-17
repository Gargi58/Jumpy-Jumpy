var block1, block2, block3, block4;
var ball;
var music;

function preload(){
music=loadSound("music.mp3");
}

function setup(){
    
    createCanvas(800,600);

    

    ball=createSprite(random(10,750),300,20,20);
    ball.shapeColor="white";
    ball.velocityX=3;
    ball.velocityY=4;

   
    block1=createSprite(100,580,180,30);
    block1.shapeColor="red";

    block2=createSprite(300,580,180,30);
    block2.shapeColor="green";

    block3=createSprite(500,580,180,30);
    block3.shapeColor="blue";

    block4=createSprite(700,580,180,30);
    block4.shapeColor="yellow";

    

}

function draw() {
    background(rgb(10,10,10))
   
    if(ball.x<0){
      music.stop()
        ball.velocityX=3
    }else if(ball.x>800){
      music.stop()
        ball.velocityX=-3
    }
   
  if(Touching(ball,block4))
  {
    music.play()
    ball.shapeColor="yellow";
    bouncy(ball,block4);
    
  }
  
  else if(Touching(ball,block3))
  {
    music.play()
    ball.shapeColor="blue";
    bouncy(ball,block3)
   
  }
    
  else if(Touching(ball,block2)){
    music.play()
    ball.shapeColor="green";
    bouncy(ball,block2)
    ball.velocityX=0;
    ball.velocityY=0;
  }
  
  else if(Touching(ball,block1)){
    music.play()
    ball.shapeColor="red";
    bouncy(ball,block1)
  }
  
  if (ball.y<0)
  {
    music.stop()
    ball.velocityY=3
  }

  
   
    drawSprites()
}