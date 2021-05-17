var bullet,wall;
var speed,weight;
var damage;
damage=0;
var thickness;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 20, 40);
  bullet.shapeColor="white"
   wall=createSprite(1200,200,thickness,height/2)
   wall.shapeColor=80,80,80;
  speed=random(223,321);
 weight=random(30,52);
 thickness=random(22,83);
  bullet.velocityX=5;
  bullet.debug=true;
  
}

function draw() {
  background("cyan");  
    if (isTouching(bullet,wall)){
    bullet.shapeColor = "red";
    wall.shapeColor = "red";
    text(damage,400,20)
    damage=0.5*weight*speed*speed/thickness*thickness*thickness
  bullet.velocityX=0
 }
  else {
    bullet.shapeColor = "white";
    wall.shapeColor = 80,80,80;
  }
  if (damage<10){
    bullet.shapeColor="green"
   // bullet.velocityX=0;
  }else {damage>10
    bullet.shapeColor="red"
    //bullet.velocityX=0;
  } 
 
  // bullet.collide(wall)
  isTouching(bullet,wall)
   
  drawSprites();
}