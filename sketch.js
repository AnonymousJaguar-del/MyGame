var bug;
var poweupBreak;
var powerupSpeed;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10;
var wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24;
var walls=[];
var wallBroken=false;
var timer=false;
var current;
var computerPLayer;
var prize;
var gameState = "play";

function setup() {
  createCanvas(1000, 600);
  wall1 = createSprite(48, 290, 15, 526);
  wall2 = createSprite(500, 34, 890, 15);
  wall3 = createSprite(940, 290, 15, 526);
  wall4 = createSprite(500, 546, 890, 15);
  wall5 = createSprite(205, 87, 200, 15);
  wall6 = createSprite(112, 105, 15, 50)
  wall7 = createSprite(125, 175, 140, 15);
  wall8 = createSprite(187.5, 151, 15, 40)
  wall9 = createSprite(248, 190, 15, 200)
  wall10 = createSprite(112, 282, 15, 125)
  wall11 = createSprite(248, 415, 15, 70)
  wall12 = createSprite(149, 226.5, 90, 15)
  wall13 = createSprite(187.5, 151, 15, 40)
  wall14 = createSprite(118, 388, 150, 15)
  wall15 = createSprite(870, 175, 15, 195)
  wall16 = createSprite(800, 150, 150, 15)
  wall17 = createSprite(735, 70, 15, 70)
  wall18 = createSprite(118, 388, 150, 15)
  wall19 = createSprite(830, 85, 80, 15)
  wall20 = createSprite(670, 190, 15, 220)
  wall21 = createSprite(670, 350, 150, 15)
  wall22 = createSprite(602, 380, 15, 50)
  wall23 = createSprite(540, 343, 15,320)
  wall24 = createSprite(605, 295, 145, 15)


  walls=[wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24];

  powerupBreak = createSprite(138, 83, 10, 10);
  powerupBreak.shapeColor="Red";

  powerupSpeed = createSprite(138, 130, 10, 10);
  powerupSpeed.shapeColor="blue";

  bug = createSprite(80, 60, 20, 20);
  
  bg = loadImage("Bgimg.png");

  computerPLayer = createSprite(826, 61, 20, 20);
  computerPLayer.shapeColor="green";

  prize = createSprite(480, 516, 15, 15);
  prize.shapeColor="gold";
}

function draw() {
  background(bg);  
  drawSprites();

  text(mouseX + " " + mouseY, mouseX, mouseY);
  
  if (gameState==="play"){
    if (bug.isTouching(powerupBreak)) {
      powerupBreak.visible = false;
   }
   computerPLayer.bounceOff(wall4);
   if (bug.isTouching(powerupSpeed)) {
 
   
 
     
     powerupSpeed.visible = false;
     current = frameCount
    
   }else{
     timer=true
   }
 
  
   if(frameCount-current<200 && timer === true) {
 
     if (keyDown("right")) {
       bug.x = bug.x + 8
     }
   
     if (keyDown("left")) {
       bug.x = bug.x - 8
     }
   
     if (keyDown("up")) {
       bug.y = bug.y - 8
     }
   
     if (keyDown("down")) {
       bug.y = bug.y + 8
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
       computerPLayer.collide (walls[i]);
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
   angle=atan((prize.y-computerPLayer.y)/(prize.x-computerPLayer.x));
   
   //to fix the direction 
   if (computerPLayer.x>prize.x)
   {angle=angle+180}
     
   //Using S-O-H & C-A-H trignometric ratios
   computerPLayer.velocityX=cos(angle)*3;
   computerPLayer.velocityY=sin(angle)*3;

   if (computerPLayer.isTouching(prize) || bug.isTouching(prize)) {
    gameState = "end";
  }
  }

  if (gameState==="end"){
    if(computerPLayer.isTouching(prize)) {
      swal({
        title: `Game Over`,
        text: "Oops you lost!!",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
        imageSize: "100x100",
        confirmButtonText: "Thanks For Playing"
      });

      bug.x = 80;
      bug.y = 60;

      computerPLayer.x = 826
      computerPLayer.y = 61

      computerPLayer.velocityX = 0;
      computerPLayer.velocityY = 0;
    }

    if(bug.isTouching(prize)) {
      swal({
        title: `You Win!`,
        text: "You beat your opponent!!",
        imageUrl:
          "https://library.kissclipart.com/20190304/woq/kissclipart-trophy-clipart-trophy-clip-art-e61cca2934188881.png",
        imageSize: "100x100",
        confirmButtonText: "Thanks For Playing"
      });
      bug.x = 80;
      bug.y = 60;

      computerPLayer.x = 826
      computerPLayer.y = 61

      computerPLayer.velocityX = 0;
      computerPLayer.velocityY = 0;
    }
  }
   
  
 

}
