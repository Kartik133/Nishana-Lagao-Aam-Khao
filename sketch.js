const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var engine;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new mango(1100,100,30);
	mango2 = new mango(1060,160,20);
	mango3 = new mango(1000,80,35);
	mango4 = new mango(900,165,25);
	mango5 = new mango(1200,180,40);
	mango6 = new mango(1020,240,25);

	treeObj = new tree(1050,580);
	groundObject = new ground(width/2,600,width,20);
  stoneObj = new Stone(235,425,50,50);
	launcherObject = new StoneShot(stoneObj.body,{x:235,y:425});
	
	Engine.run(engine);
}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy,200,340,200,300);
  
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stoneObj.display();
  launcherObject.display();
  groundObject.display();
}

function mouseDragged() {
    Matter.Body.setPosition(stoneObj.body,{x: mouseX, y: mouseY});
}

function mouseReleased() {
    launcherObject.fly();
}

function keyPressed() {
  if(keyCode === 32) {
     launcherObject.attach(stoneObj.body);
  }
}

/*function detectollision(lstone,lmango) {
  var mangoBodyPosition=lmango.body.position;
  var stoneBodyPosition=lstone.body.position;

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

  if(distance <= lmango.r + lstone.r) {
    Matter.Body.setStatic(lmango.body,false);
  }
}*/
function detectollision(lstone,lmango) {
  var mangoBodyPosition=lmango.body.position
  var stoneBodyPosition=lstone.body.position

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

  if(distance <= lmango.r + lstone.r) {
    Matter.Body.setStatic(lmango.body,false);
  }
}