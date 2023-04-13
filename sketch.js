

function preload(){
  bgImg=loadImage("lane.jpg")
  johnImg=loadImage("john.png")
  tommyImg=loadImage("tommy.png")
  ballImg=loadImage("ball.png")
  pinImg=loadImage("pin.png")
 s=loadImage("reset.png")

}

function setup(){
  createCanvas(800,800);

  score=0

  button = createSprite(100,100)
  button.addImage("s",s)
  button.scale=0.1

  pin1=createSprite(width/2, height/2-150)
  pin1.addImage(pinImg)
  pin1.scale=0.2
  pin1.velocityX=3

  ball=createSprite(width/2+30,height-135)
  ball.addImage(ballImg)
  ball.scale=0.15

  pin2=createSprite(width/2+30, height/2-150)
   pin2.addImage(pinImg)
   pin2.scale=0.2
   pin2.velocityX=3

   pin3=createSprite(width/2-30, height/2-150)
   pin3.addImage(pinImg)
   pin3.scale=0.2
   pin3.velocityX=3

   pin4=createSprite(width/2+40, height/2-150)
   pin4.addImage(pinImg)
   pin4.scale=0.2
   pin4.velocityX=3

   pin5=createSprite(width/2-40, height/2-150)
   pin5.addImage(pinImg)
   pin5.scale=0.2
   pin5.velocityX=3


  
}

function draw(){
  background(bgImg);  
 
  textSize(25)
  fill("white")
 text("Score: "+score,400,121)



 
 
 if(keyDown("LEFT_ARROW")){
   ball.x-=6



 }
 if(keyDown("RIGHT_ARROW")){
   ball.x+=6

 }
 if(keyDown("UP_ARROW")){
   ball.y-=6

 }

 if(pin1.x>width/2+80){
  pin1.velocityX=-3
}

if(pin2.x>width/2+80){
  pin2.velocityX=-3
}
if(pin3.x>width/2+80){
  pin3.velocityX=-3
}
if(pin4.x>width/2+80){
  pin4.velocityX=-3

}
if(pin5.x>width/2+80){
  pin5.velocityX=-3
}



if(pin1.x<width/2-40){
  pin1.velocityX=3
}
if(pin2.x<width/2-40){
  pin2.velocityX=3
}
if(pin3.x<width/2-40){
  pin3.velocityX=3
}
if(pin4.x<width/2-40){
  pin4.velocityX=3
}
if(pin5.x<width/2-40){
  pin5.velocityX=3
}

if(ball.isTouching(pin1)){
  score=score+2
  pin1.velocityX=0
  pin1.visible=false;
  pin1.x=0
  pin1.y=0

}

if(ball.isTouching(pin2)){
  score=score+2
  pin2.velocityX=0
  pin2.visible=false;
  pin2.x=0
  pin2.y=0

}
if(ball.isTouching(pin3)){
  score=score+2
  pin3.velocityX=0
  pin3.visible=false;
  pin3.x=0
  pin3.y=0

}
if(ball.isTouching(pin4)){

  score=score+2
  pin4.velocityX=0
  pin4.visible=false;
  pin4.x=0
  pin4.y=0
}

if(ball.isTouching(pin5)){
  score=score+2
  pin5.velocityX=0
  pin5.visible=false;
  pin5.x=0
  pin5.y=0

}

if(mousePressedOver(button)){
  resetGame()
}
  drawSprites()
}

function resetGame(){
score=0
  ball.x=width/2+30
  ball.y=height-135

  pin1.x=width/2
  pin1.y= height/2-150
  pin1.visible=true

  pin2.x=width/2+30
  pin2.y= height/2-150
  pin2.visible=true


  pin3.x=width/2-30
  pin3.y= height/2-150
  pin3.visible=true


  pin4.x=width/2-40
  pin4.y= height/2-150
  pin4.visible=true

  pin5.x=width/2+40
  pin5.y= height/2-150
  pin5.visible=true
 
  
  }
   