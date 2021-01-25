
var monkey , monkey_running
var Monkey = []
var ground
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup,FoodGroup2,FoodGroup3,FoodGroup4,FoodGroup5,FoodGroup6,FoodGroup7,FoodGroup8
var score=0
var survivalTime=0
var backgroundImage,back
var PLAY=1 
var END=0
var gameState=1
var index =0;
var m, b, b2, b3, b4, b5, b6, b7, b8


function preload(){
  
  backgroundImage = loadImage("jungle.jpg")
  
  monkey_running =   loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
}



function setup() {
  createCanvas(700, 475 );
  
  
  ground = createSprite(300, 408, 3800, 15)
  //ground.velocityX = -4
  ground.shapeColor = ("green")
  ground.x = ground.width/2
  ground.visible = false
 
  //back = createSprite(250, 150, 10, 10)
  //back.velocityX = -4
  //back.addImage(backgroundImage)
 
  
  monkey = createSprite(150, 385, 20, 20)
  monkey.addAnimation("running", monkey_running)
  monkey.scale=.185
 
  Monkey=[monkey]
 
  
  FoodGroup = createGroup()
  FoodGroup2 = createGroup()
  FoodGroup3 = createGroup()
  FoodGroup4 = createGroup()
  FoodGroup5 = createGroup()
  FoodGroup6 = createGroup()
  FoodGroup7 = createGroup()
  FoodGroup8 = createGroup()

  obstacleGroup = createGroup()
   
  monkey.setCollider("rectangle", 0,0, 190, 600)

  m = new Monkeys()
}


function draw() {
  background("lightblue")
  
     /* if(ground.x<0){
    ground.x = ground.width/2
  }
          if(back.x<0){
    back.x = back.width/2
  }*/
  camera.position.y = displayHeight/4
  camera.position.x = monkey.x

    if(keyDown("space") && monkey.y>300){
    monkey.velocityY = -19.5
  }

  if(keyDown("right")){
    monkey.x = monkey.x+5
  }

  if(keyDown("left")){
    monkey.x = monkey.x-5
  }
  
    monkey.velocityY = monkey.velocityY + 0.8

      if(monkey.isTouching(FoodGroup)){
    score = score+2
    FoodGroup.destroyEach()
    
  }

  if(monkey.isTouching(FoodGroup2)){
    score = score+2
    FoodGroup2.destroyEach()
    
  }
  
  if(monkey.isTouching(FoodGroup3)){
    score = score+2
    FoodGroup3.destroyEach()
    
  }

  if(monkey.isTouching(FoodGroup4)){
    score = score+2
    FoodGroup4.destroyEach()
    
  }

  if(monkey.isTouching(FoodGroup5)){
    score = score+2
    FoodGroup5.destroyEach()
    
  }

  if(monkey.isTouching(FoodGroup6)){
    score = score+2
    FoodGroup6.destroyEach()
    
  }

  if(monkey.isTouching(FoodGroup7)){
    score = score+2
    FoodGroup7.destroyEach()
    
  }

  if(monkey.isTouching(FoodGroup8)){
    score = score+2
    FoodGroup8.destroyEach()
    
  }

  if(monkey.x ===3700){
    alert("Game Over!");
    monkey.setVelocityX(0)

  }
  

    bananas()
  stones()
  

  
        switch(score){
    case 6: monkey.scale = .190;
            break;
    case 10: monkey.scale = .210
            break;
    case 14: monkey.scale = .230;
            break;  
    case 18: monkey.scale = .240;
            break;
    default: break;    

  }
  

  if(obstacleGroup.isTouching(monkey)){
     monkey.scale = .185
     score = 0
  }
 
  monkey.collide(ground)

  m.display()
  drawSprites()
  
  stroke("white")
  textSize(20)
  fill("white")
  text("Score: " + score, monkey.x+150,20)
  
  stroke("white")
  textSize(20)
  fill("white")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime, monkey.x-220,20)

  stroke("white")
  textSize(15)
  fill("white")
  text("[Click the Left and Right Arrows to Move]", 60, 70)
  

  
}

function bananas(){

 
  switch(monkey.x){
    
    case 200: b = createSprite(600, 350);
    b.y = Math.round(random(150, 225))
    b.addImage(bananaImage)
    b.scale = .12
    FoodGroup.add(b)
           break;
    case 400: b2 = createSprite(1000, 350);
    b2.y = Math.round(random(150, 225))
    b2.addImage(bananaImage)
    b2.scale = .12
    FoodGroup2.add(b2)
           break; 
    case 600: b3 = createSprite(1400, 350);
    b3.y = Math.round(random(150, 225))
    b3.addImage(bananaImage)
    b3.scale = .12
    FoodGroup3.add(b3)
           break;     
    case 800: b4 = createSprite(1800, 350);
    b4.y = Math.round(random(150, 225))
    b4.addImage(bananaImage)
    b4.scale = .12
    FoodGroup4.add(b4)
           break;   
    case 1000: b5 = createSprite(2200, 350);
    b5.y = Math.round(random(150, 225))
    b5.addImage(bananaImage)
    b5.scale = .12
    FoodGroup5.add(b5)
           break;  
    case 1200: b6 = createSprite(2600, 350);
    b6.y = Math.round(random(150, 225))
    b6.addImage(bananaImage)
    b6.scale = .12
    FoodGroup6.add(b6)
           break;    
    case 1400: b7 = createSprite(3000, 350);
    b7.y = Math.round(random(150, 225))
    b7.addImage(bananaImage)
    b7.scale = .12
    FoodGroup7.add(b7)
           break; 
  case 1600: b8 = createSprite(3500, 350);
    b8.y = Math.round(random(150, 225))
    b8.addImage(bananaImage)
    b8.scale = .12
    FoodGroup8.add(b8)
           break;       
             
    default: break;  
  }
   
}

function stones(){
  var s
 
  switch(monkey.x){
    
    case 400: s = createSprite(800, 350);
    s.addImage(obstacleImage)
    s.scale = .25
    s.setCollider("rectangle", 0,0, 400, 400)
    obstacleGroup.add(s)
            break;

    case 800:s = createSprite(1600, 350);
    s.addImage(obstacleImage)
    s.scale = .25
    s.setCollider("rectangle", 0,0, 400, 400)
    obstacleGroup.add(s)
            break;

    case 1200: s = createSprite(2400, 350);
    s.addImage(obstacleImage)
    s.scale = .25
    s.setCollider("rectangle", 0,0, 400, 400)
    obstacleGroup.add(s)
            break;  

    case 1600: s = createSprite(3200, 350);
    s.addImage(obstacleImage)
    s.scale = .25
    s.setCollider("rectangle", 0,0, 400, 400)
    obstacleGroup.add(s)
            break;
    default: break;  
  }

}




