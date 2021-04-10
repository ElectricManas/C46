var jonesy, jonesy_running, jonesy_collided;
var ground, invisibleGround, groundImage;
var cloudGroup, cloudImage;
var obstacleGroup,obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6;
var steps = 0;
var bgimg;
var PLAY=1;
var END = 0
var gameState = PLAY
function preload(){
bgimg=loadImage("bgimg.jpg");

  //jonesy_running = loadAnimation("jonesy.gif");
  //trex_collided = loadImage("trex_collided.png");
  
 // groundImage = loadImage("ground2.png");
 sageImage =  loadImage ("sage.png");
 kondorimg = loadImage ( "kondor-.png"); 
 omenimg = loadImage ( "omen_11.png");
 yoruimg = loadImage ("Yoru.png");
 cypherimg = loadImage ("cypher.png");
 jettimg = loadImage ("jett.png");
 // cloudImage = loadImage ("cloud.png");*
}

function setup() {
  createCanvas(1200, 400);
  
  jonesy = createSprite(50,390,20,50);
  //jonesy.addAnimation("running",jonesy_running );
  //trex.scale = 0.5;
  
  ground = createSprite(600,380,1200,20);
  //ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(600,390,1200,10);
  invisibleGround.visible = false;
  
  sageGroup = new Group();
  kondorGroup = new Group();
  omenGroup = new Group();
  yoruGroup = new Group();
  cypherGroup = new Group();
  jettGroup = new Group();

}

function draw() {
  background(bgimg); 
  //score = score+Math.round(getFrameRate()/60);
  //text("score: "+score, 500,50);
  if (gameState===PLAY){


  if(keyDown("space")) {
    jonesy.velocityY = -10;
  }
  
  jonesy.velocityY = jonesy.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  jonesy.collide(invisibleGround);
  spawnClouds();
  //spawnObstacles();
  //call the obstacle functions after this and increase the score or decrease accordingly.
  
  if(frameCount%1000===0){
    spawnSage ();
    if (sageGroup.isTouching(jonesy)){
      steps=steps+500
    }
  }
  if (frameCount%250===0){
    spawnKondor();
    if (kondorGroup.isTouching(jonesy)){
      //decrease jonesy size
      jonesy.scale=0.8;
    }
  }
   if (frameCount%350===0){
      spawnOmen();
      if (omenGroup.isTouching(jonesy)){
        //increase the size 
          jonesy.scale=1
      }
      
   }
   if (frameCount%650===0){
     spawnYoru();
     if (yoruGroup.isTouching(jonesy)){
      if (kondorGroup.isTouching(jonesy)||cypherGroup.isTouching(jonesy)){
        jonesy.velocityY= -10
      }
     }
   } 
   if (frameCount%800===0){
   spawnCypher();
    if (cypherGroup.isTouching(jonesy)){
    steps =steps-100
   }}
  drawSprites();
}}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 120=== 0) {
    var cloud = createSprite(1200,120,40,10);
    cloud.y = Math.round(random (180,220))
    //cloud.addImage(cloudImage);
    //cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 400;
    
    //adjust the depth
    cloud.depth = jonesy.depth;
    jonesy.depth = jonesy.depth + 1;
    //cloudGroup.add(cloud);
  }}


function spawnSage() {
  if(frameCount % 100 === 0) {
    var sage = createSprite(1200,365,10,40);
    sage.velocityX = -6;
    sage.addImage(sageImage);
    
    
    //assign scale and lifetime to the obstacle           
    sage.scale = 0.5;
    sage.lifetime = 300;
    sageGroup.add(sage);
  }
  
}
function spawnKondor() {
  
    var kondor = createSprite(1200,365,10,40);
    kondor.velocityX = -6;

   kondor.addImage(kondorimg);

    kondor.scale = 0.5;
    kondor.lifetime = 300;
    kondorGroup.add(kondor);
  }

  function spawnOmen() {
  
      var omen = createSprite(1200,365,10,40);
      omen.velocityX = -6;

      omen.addImage(omenimg);
  
      omen.scale = 0.5;
      omen.lifetime = 300;
      omenGroup.add(omen);
    }

    function spawnYoru() {

     
        var yoru = createSprite(1200,365,10,40);
        yoru.velocityX = -6;

        yoru.addImage(yoruimg);
    
        yoru.scale = 0.5;
        yoru.lifetime = 300;
        yoruGroup.add(yoru);
      }

      function spawnCypher() {

     
        var cypher = createSprite(1200,365,10,40);
        cypher.velocityX = -6;

       cypher.addImage(cypherimg);
    
        cypher.scale = 0.5;
        cypher.lifetime = 300;
        cypherGroup.add(cypher);
      }
      function spawnJett() {

        jett.addImage(jettimg);
     
        var jett = createSprite(1200,365,10,40);
        jett.velocityX = -6;
    
    
        jett.scale = 0.5;
        jett.lifetime = 300;
        jettGroup.add(jett );
      }