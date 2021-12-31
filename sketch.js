var bug;
var poweupBreak;
var powerupSpeed;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10;
var wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20;
var wall21, wall22, wall23, wall24, wall25, wall26, wall27, wall28, wall29, wall30;
var walls=[];
var wallBroken=false;
var timer=false;
var current;
var computerPLayer;
var prize;
var gameState = "play";
var trophyImg;
var posit = [[270, 210],[330, 110]]
var randomPos;

function setup() {
  createCanvas(1000, 600);
  wall1 = createSprite(48, 290, 15, 526);
  wall2 = createSprite(500, 34, 890, 15);
  wall3 = createSprite(940, 290, 15, 526);
  wall4 = createSprite(500, 546, 890, 15);
  wall5 = createSprite(205, 87, 200, 15);
  wall6 = createSprite(112, 105, 15, 50)
  wall7 = createSprite(125, 175, 140, 15);
  wall8 = createSprite(187.5, 151, 15, 40);
  wall9 = createSprite(248, 190, 15, 200);
  wall10 = createSprite(112, 282, 15, 125);
  wall11 = createSprite(248, 415, 15, 70)
  wall12 = createSprite(149, 226.5, 90, 15);
  wall13 = createSprite(187.5, 151, 15, 40);
  wall14 = createSprite(118, 388, 150, 15);
  wall15 = createSprite(870, 175, 15, 195);
  wall16 = createSprite(800, 150, 150, 15);
  wall17 = createSprite(735, 70, 15, 70);
  wall18 = createSprite(118, 388, 150, 15);
  wall19 = createSprite(830, 85, 80, 15);
  wall20 = createSprite(670, 190, 15, 220);
  wall21 = createSprite(670, 350, 150, 15);
  wall22 = createSprite(602, 380, 15, 50);
  wall23 = createSprite(540, 345, 15,318);
  wall24 = createSprite(605, 295, 145, 15);
  wall25 = createSprite(740, 285, 15, 145);
  wall26 = createSprite(160, 337, 105, 15);
  wall27 = createSprite(320, 442, 15, 125);
  wall28 = createSprite(285, 387, 80, 15);
  wall29 = createSprite(115, 469, 15, 73);
  wall30 = createSprite(155, 440, 80, 15);
  wall31 = createSprite(320, 310, 15, 145);
  wall32 = createSprite(335.5, 240, 45, 15);
  wall33 = createSprite(390, 335, 145, 15);
  wall34 = createSprite(410, 260, 15, 145);
  wall35 = createSprite(330, 195, 175, 15);
  wall36 = createSprite(469, 285, 15, 115);
  wall37 = createSprite(400, 87.5, 115, 15);
  wall38 = createSprite(464, 140, 15, 120);
  wall39 = createSprite(500, 193, 75, 15);
  wall40 = createSprite(185, 498, 145, 15);
  wall41 = createSprite(425, 496, 225, 15);
  wall42 = createSprite(410, 445, 15, 105);
  wall43 = createSprite(420, 386, 100, 15);
  wall44 = createSprite(380, 140, 154, 15);
  wall45 = createSprite(605, 120, 15, 165);
  wall46 = createSprite(500, 193, 75, 15);
  wall47 = createSprite(562, 120, 75, 15);
  wall48 = createSprite(800, 210, 134, 15);
  wall49 = createSprite(602, 493, 15, 115);
  wall50 = createSprite(770, 490, 225, 15);
  wall51 = createSprite(880, 400, 15, 195);
  wall52 = createSprite(800, 353, 15, 195);
  wall53 = createSprite(708, 443, 198, 15);

  randomPos = random(0, 2);

  walls=[wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24, wall25, wall26, wall27, wall28, wall29, wall30, wall31, wall32, wall33, wall34, wall35, wall36, wall37, wall38, wall39, wall40, wall41, wall42, wall43, wall44, wall45, wall46, wall47, wall48, wall49, wall50, wall51, wall52, wall53];
  powerupBreak = createSprite(120, 200, 10, 10);
  powerupBreak.shapeColor="Red";

  powerupSpeed = createSprite(posit[Math.floor(randomPos)][0], posit[Math.floor(randomPos)][1], 10, 10);
  powerupSpeed.shapeColor="blue";

  bug = createSprite(80, 60, 20, 20);
  bug.setCollider("rectangle", 0, 0, 100, 140)

  computerPLayer = createSprite(826, 61, 20, 20);
  computerPLayer.shapeColor="green";
  computerPLayer.setCollider("rectangle", 0, 50, 150, 120)

  prize = createSprite(480, 516, 15, 15);
  prize.shapeColor="gold";
}

function preload() {
  prizeImg = loadImage("Trophy_img-removebg-preview.png");
  CompImg = loadImage("Robot-m.png")
  playerImg  = loadImage("Player-removebg-preview.png")
}

function draw() {
  background(0, 0, 0);  
  drawSprites();

  prize.addImage(prizeImg);
  computerPLayer.addImage(CompImg);
  bug.addImage(playerImg);

  prize.scale = 0.06
  computerPLayer.scale = 0.2
  bug.scale = 0.25
  bug.debug=true;

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

       walls[i].shapeColor = "green";
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
   computerPLayer.velocityX=cos(angle)*2.6;
   computerPLayer.velocityY=sin(angle)*2.6;

   if (computerPLayer.isTouching(prize) || bug.isTouching(prize)) {
    gameState = "end";
  }
  }

  if (gameState==="end"){
    if(computerPLayer.isTouching(prize)) {
      swal({
        title: `There's always a next time!!`,
        imageUrl:
"https://th.bing.com/th/id/OIP.gm1S12UBPRShNdG1EnZE0gHaDp?pid=ImgDet&w=609&h=300&rs=1",
        imageSize: "300x200",
        confirmButtonText: "Play Again"
      });

      bug.x = 80;
      bug.y = 60;

      computerPLayer.x = 826
      computerPLayer.y = 61

      powerupBreak.visible = true;
      powerupSpeed.visible = true;


      computerPLayer.velocityX = 0;
      computerPLayer.velocityY = 0;
    }

    if(bug.isTouching(prize)) {
      swal({
        title: `You Win!`,
        text: "You beat your opponent!!",
        imageUrl:
          "https://th.bing.com/th/id/R.6f4b48a690e70c2fb7ee387465f55726?rik=SELFl0OPw%2bnwzg&riu=http%3a%2f%2fpixelartmaker.com%2fart%2f681e156ae971bd4.png&ehk=HA448i84glm592i7w3tQ%2bptMa1%2bSrBspvVr%2bLz7AwDg%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
        imageSize: "300x200",
        confirmButtonText: "Thanks For Playing"
      });
      bug.x = 80;
      bug.y = 60;
      
      powerupBreak.visible = true;
      powerupSpeed.visible = true;

      computerPLayer.x = 826
      computerPLayer.y = 61

      computerPLayer.velocityX = 0;
      computerPLayer.velocityY = 0;
    }
  }
}
