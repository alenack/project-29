
/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone;
var boy, boyimg;
var tree,treeimg;
var slingShot;
var mango1,mango2,mango3,mango4,mango5;

function preload()
{
boyimg = loadImage("sprites/boy.png");	
treeimg = loadImage("sprites/tree.png");
}

function setup() {
	createCanvas(1350, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1 = new Mango(800,250,70,70);
	mango2 = new Mango(800,100,70,70);
	mango3 = new Mango(1000,220,70,70);
	mango4 = new Mango(1000,100,70,70);
	mango5 = new Mango(900,150,70,70);
	stone = new Stone(150,480, 20, 20);
	ground = new Ground(675, 600, 1350, 10);
	slingShot = new Slingshot(stone.body,{x:150,y:480});
	boy = createSprite(200, 530, 30, 100);
	boy.addImage(boyimg);
	boy.scale = 0.1;
	
	tree = createSprite(890,300,30,40);
	tree.addImage(treeimg);
	tree.scale = 0.5;



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
 ground.display();
 drawSprites();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 stone.display();
 slingShot.display();
 detectcollision(stone,mango1);
 detectcollision(stone,mango2);
 detectcollision(stone,mango3);
 detectcollision(stone,mango4);
 detectcollision(stone,mango5);

}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingShot.fly();
}
function detectcollision(lstone,lmango){
mangoBodyPosition = lmango.body.position
stoneBodyPosition = lstone.body.position

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r)
{
Matter.Body.setStatic(lmango.body,false)
}
}*/
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var stoneObj,groundObject, sling;
var mango1,mango2,mango3,mango4,mango5;
var boy,boyimg;
var tree,treeimg;

function preload(){
	boyimg = loadImage("sprites/boy.png");
	treeimg = loadImage("sprites/tree.png");
  }

function setup() {
createCanvas(1370, 610); 
engine = Engine.create();
world = engine.world;

boy = createSprite(200, 530, 30, 100);
	boy.addImage(boyimg);
	boy.scale = 0.1;
	tree = createSprite(890,300,30,40);
	tree.addImage(treeimg);
	tree.scale = 0.5;
stoneObj=new Stone(235,420,30); 
    mango1 = new Mango(800,250,70,70);
	mango2 = new Mango(800,100,70,70);
	mango3 = new Mango(1000,220,70,70);
	mango4 = new Mango(1000,100,70,70);
	mango5 = new Mango(900,150,70,70);
	


//treeObj=new Tree(1050,580);
groundObject=new Ground(width/2,600,width,20);
sling=new Slingshot(stoneObj.body,{x:240,y:460})  

Engine.run(engine);
 
}

function draw() {

  background("lavender");
  textSize(30);
  fill('purple');
  text("Press Space to get another stone to Play",50 ,50);
  //image(boy ,200,380,200,300);
  
  

  //treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  
 // stoneObj.display();

  groundObject.display();
  sling.display();
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  
}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased(){
	sling.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  sling.attach(stoneObj.body);
	}
}

  function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  
  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if (distance<=lmango.r+lstone.r)
 {
   Matter.Body.setStatic(lmango.body , false);
 } 
}



