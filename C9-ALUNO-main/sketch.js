var ball

function setup() {
  createCanvas(400,400);
  
  ball=createSprite(200,200,30,30)
  ball.shapeColor="fuchsia"
}

function draw() 
{
  background(0);

  if (keyDown("d")||keyIsDown(RIGHT_ARROW)) {
    ball.x=ball.x+5
  }

  if (keyIsDown(LEFT_ARROW)) {
    ball.x=ball.x -5
  }

  if (keyIsDown(UP_ARROW)) {
   ball.y-=5 
  }

  if (keyIsDown(DOWN_ARROW)) {
    ball.y+=5 
   }

  if(keyDown("space")){
    background("white")
  }


    
  drawSprites();
}




