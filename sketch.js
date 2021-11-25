var bug;
var poweupBreak;
var powerupSpeed;
var wall1, wall2, wall3;
var walls=[];
var wallBroken=false;
var timer=false;

function setup() {
  createCanvas(1000, 600);
  wall1 = createSprite(25, 42, 150, 5);
  wall2 = createSprite(99, 125, 5, 170);
  wall3 = createSprite(181, 110, 5, 205);
  
  walls=[wall1, wall2, wall3];

  powerupBreak = createSprite(138, 83, 10, 10);
  powerupBreak.shapeColor="Red";

  powerupSpeed = createSprite(138, 130, 10, 10);
  powerupSpeed.shapeColor="blue";

  bug = createSprite(25, 22, 20, 20);
  
}

function draw() {
  background(0);  
  drawSprites();

  text(mouseX + " " + mouseY, mouseX, mouseY);
  
  if (bug.isTouching(powerupBreak)) {
      powerupBreak.visible = false;
  }

  if (bug.isTouching(powerupSpeed)) {

    timer = true;

    
    powerupSpeed.visible = false;
    current = frameCount
    if(frameCount-current<100 && timer === true) {

    if (keyDown("right")) {
      bug.x = bug.x + 7
    }
  
    if (keyDown("left")) {
      bug.x = bug.x - 7
    }
  
    if (keyDown("up")) {
      bug.y = bug.y - 7
    }
  
    if (keyDown("down")) {
      bug.y = bug.y + 7
    }
   } else if(frameCount-current > 100) {
     timer = false;
   }
  }


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
}
