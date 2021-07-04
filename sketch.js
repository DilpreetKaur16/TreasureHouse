var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var score = 0;
var cashG,diamondsG,jwelleryG,swordGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadImage("gameOver.png");
  re =loadImage("re.png");

}

function setup(){
  
  createCanvas(displayWidth,displayHeight);
// Moving background
path=createSprite(displayWidth/2,displayHeight);
path.addImage(pathImg);



//creating boy running
boy = createSprite(displayWidth/2,displayHeight-180);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  gameover = createSprite(displayWidth/2, displayHeight/2-150);
  gameover.addImage(endImg);
  restart= createSprite(displayWidth/2-20, displayHeight/2-50)
  restart.addImage(re)
  restart.scale=0.7;
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();

}

function draw() {
background("gray")

if(gameState===PLAY){
    gameover.visible=false;
    restart.visible=false;

    path.velocityY = 8;
    
if (path.y > displayHeight){
  path.y = height/2;
}

boy.x=mouseX;
edges= createEdgeSprites();
boy.collide(edges);
diamonds();
cashs();
jewellarys();
swords();
}
if(cashG.isTouching(boy)){
cashG.destroyEach();
score=score+20;
}
if(jwelleryG.isTouching(boy)){
jwelleryG.destroyEach();
score=score+10;
}
if(diamondsG.isTouching(boy)){
diamondsG.destroyEach();
score=score+50;
}
if(swordGroup.isTouching(boy)){

gameState=END;
}
if(gameState===END){
    gameover.visible=true;
    restart.visible=true;
cashG.destroyEach();
jwelleryG.destroyEach();
diamondsG.destroyEach();
swordGroup.destroyEach();
path.velocityY=0;
boy.visible=false;
if(mousePressedOver(restart)){
    gameState=PLAY;
    boy.visible=true;
    score=0;
    
}
}
drawSprites();
fill("white");
stroke("red")
textSize(30)
text("Treasure Collected="+score, displayWidth/2+100, 40);
}

function diamonds(){
  if(frameCount%160==0){
  var diamond = createSprite(200,0,50,50);
  diamond.addImage(diamondsImg)
  diamond.scale=0.05;
  diamond.velocityY=5;
  diamond.x= Math.round(random(40, displayWidth-40));
  diamond.lifetime= displayHeight/3;
  diamondsG.add(diamond)
  }
}
function cashs(){
  if(frameCount%300==0){
  var cash = createSprite(100,0,50,50);
  cash.addImage(cashImg)
  cash.scale=0.2;
  cash.velocityY=5;
  cash.x= Math.round(random(60, displayWidth-60));
  cash.lifetime= displayHeight/3;
  cashG.add(cash);
  }
}
function jewellarys(){
    if(frameCount%250==0){
    var jewellary = createSprite(100,0,50,50);
    jewellary.addImage(jwelleryImg)
    jewellary.scale=0.2;
    jewellary.velocityY=5;
    jewellary.x= Math.round(random(60, displayWidth-60));
    jewellary.lifetime= displayHeight/5;
    jwelleryG.add(jewellary);
    }
  }
  function swords(){
    if(frameCount%150==0){
    var sword = createSprite(100,0,50,50);
    sword.addImage(swordImg)
    sword.scale=0.2;
    sword.velocityY=7;
    sword.x= Math.round(random(60, displayWidth-60));
    sword.lifetime= displayHeight/5;
    swordGroup.add(sword)
    }
  }
