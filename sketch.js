   
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage ;
var foodGroup, obstacleGroup;
var stone;

var survivalTime;
var survivalTime=0;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 600);
  
  monkey=createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.2;
  
  ground=createSprite(400, 350, 3000, 5);
  ground.velocityX=-4;
  ground.x=ground.width/2;

  foodGroup=createGroup();
  obstacleGroup=createGroup();
}


function draw() {
  background("lightBlue");
  
  if(ground.x < 0) {
    ground.x=ground.width/2;
  }
  
  if(keyDown("space") ) { monkey.velocityY = -12; } monkey.velocityY = monkey.velocityY + 0.8;
  
 if(obstacleGroup.isTouching(monkey)) {
   monkey.velocityX=0;
   obstacleGroup.setVelocityXEach(0);
 }
  monkey.collide(ground);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(getFrameRate());
  text("Survival Time :" + survivalTime, 100, 50)
           
  
  
  
  
  food();
  obstacle1();
  drawSprites();

}

function food() {
  if(frameCount%80===0) {
    banana=createSprite(600, 250, 30, 30);
    banana.y=Math.round(random(120, 190));
    banana.addImage(bananaImage);
    banana.scale=0.15;
    banana.velocityX=-4;
    banana.setLifetime=150;
    foodGroup.add(banana);
  }
}

function obstacle1() {
  
  if(frameCount%300===0) {
    var obstacle=createSprite(600, 310, 10, 40);
    obstacle.velocityX=-6;
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.2;
    obstacle.lifeTime=100;
    
    obstacleGroup.add(obstacle);
    monkey.depth = obstacle.depth
    monkey.depth = monkey.depth + 1 
    
  }

}