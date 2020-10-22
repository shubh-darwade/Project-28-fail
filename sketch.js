
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var a=1;
var boyImg,treeImg;
function preload()
{
  boyImg=loadImage("images/boy.png");
  treeImg=loadImage("images/tree.png");
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

  var options = {
    isStatic: true
}

	//Create the Bodies Here.
   
    ground = Bodies.rectangle(500,600,1000,10,options);
   stone1 = new stone(165,495,30);
   mango1 = new mango(750,250,50);
   mango2 = new mango(650,250,50);
   mango3 = new mango(750,150,50);
   mango4 = new mango(650,150,50);
   mango5 = new mango(800,200,50);
   mango6 = new mango(850,250,50);
   mango7 = new mango(750,70,50,);
   mango8 = new mango(600,250,50);
     
   chain1 = new chain(stone1.body,{x: 165 , y: 495});
    World.add(world,ground);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  imageMode(CENTER);
  background(230,230,230);
  fill("green");
  rect(ground.position.x,ground.position.y,1000,10);
  fill("brown");
  rect(500,650,1000,100);
   image(boyImg,200,550,100,200);
   image(treeImg,700,325,400,600);

   DetectCollision(stone1.body,mango1.body);
   DetectCollision(stone1.body,mango2.body);
   DetectCollision(stone1.body,mango3.body);
   DetectCollision(stone1.body,mango4.body);
   DetectCollision(stone1.body,mango5.body);
   DetectCollision(stone1.body,mango6.body);
   DetectCollision(stone1.body,mango7.body);
   DetectCollision(stone1.body,mango8.body);


   stone1.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();
chain1.display();
    drawSprites();

    
}
function mouseDragged()
{
  if(a===1)
  {
  Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
  
  }
}
function mouseReleased()
{
  chain1.fly();
  a=a+1;
}

function DetectCollision(lstone,lmango) {
  var mangoBody=lmango.position;
  var stoneBody=lstone.position;
  var distance = dist(stoneBody.x,stoneBody.y,mangoBody.x,mangoBody.y);
  if(distance<=lmango.r+lstone.r)
  {
    Matter.Body.setStatic(lmango.body,false);
  }
}

