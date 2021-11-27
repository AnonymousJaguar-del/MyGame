var bug;
var poweupBreak;
var powerupSpeed;
var wall1, wall2, wall3, wall4, wall5;
var walls=[];
var wallBroken=false;
var timer=false;
var current;
var computerPLayer;
var prize;

function setup() {
  createCanvas(1000, 600);
  wall1 = createSprite(51, 280, 20, 530);
  wall2 = createSprite(550, 25, 800, 20);
  wall3 = createSprite(181, 110, 5, 205);
  wall4 = createSprite(445, 318, 500, 5);
  wall5 = createSprite(445, 308, 500, 5);
  wall5.rotation=90

  walls=[wall1, wall2, wall3, wall4];

  powerupBreak = createSprite(138, 83, 10, 10);
  powerupBreak.shapeColor="Red";

  powerupSpeed = createSprite(138, 130, 10, 10);
  powerupSpeed.shapeColor="blue";

  bug = createSprite(25, 15, 15, 15);
  
  bg = loadImage("Bgimg.png");

 // computerPLayer = createSprite(25, 22, 20, 20);
  //omputerPLayer.shapeColor="green";

  prize = createSprite(710, 543, 15, 15);
  prize.shapeColor="gold";
}

function draw() {
  background(bg);  
  drawSprites();

  text(mouseX + " " + mouseY, mouseX, mouseY);
  
  if (bug.isTouching(powerupBreak)) {
      powerupBreak.visible = false;
  }


   //computerPLayer.bounceOff(wall4);
  if (bug.isTouching(powerupSpeed)) {

  

    
    powerupSpeed.visible = false;
    current = frameCount
   
  }else{
    timer=true
  }

 
  if(frameCount-current<200 && timer === true) {

    if (keyDown("right")) {
      bug.x = bug.x + 15
    }
  
    if (keyDown("left")) {
      bug.x = bug.x - 15
    }
  
    if (keyDown("up")) {
      bug.y = bug.y - 15
    }
  
    if (keyDown("down")) {
      bug.y = bug.y + 15
    }
   
   } 
  
  console.log(timer)


  for(var i=0; i < walls.length; i++){
      if (bug.isTouching(walls[i])){
        if(keyDown("space") && wallBroken === false) {
          walls[i].destroy();
          wallBroken = true;
        }
      }
      bug.collide (walls[i]);
  }

  if (keyDown("right")) {
    bug.x = bug.x + 3
  }

  if (keyDown("left")) {
    bug.x = bug.x - 3
  }

  if (keyDown("up")) {
    bug.y = bug.y - 3
  }

  if (keyDown("down")) {
    bug.y = bug.y + 3
  }
  
  //finding the angle using arc-tan
  //angle=atan((prize.y-computerPLayer.y)/(prize.x-computerPLayer.x));
  
  //to fix the direction 
  //if (computerPLayer.x>prize.x)
  //{angle=angle+180}
    
  //Using S-O-H & C-A-H trignometric ratios
  //computerPLayer.velocityX=cos(angle)*5;
  //computerPLayer.velocityY=sin(angle)*5;
  
  //rotate the sprites in the direction they're moving
  //prize.rotation=angle;
  //computerPLayer.rotation=angle;
}
