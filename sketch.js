
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var bobObj1, bobObj2, bobObj3, bobObj4, bobObj5;
var roof, rope1, rope2, rope3, rope4, rope5;



function setup() {
	var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var bobDiameter1 = 100;
	var bobDiameter2 = 50;
	var bobDiameter3 = 0;
	var bobDiameter4 = -50;
	var bobDiameter5 = -100;
	roof = new Roof(300, 100, 530, 30);
	bobObj1 = new Bob(100, 550, 100);
	bobObj2 = new Bob(200, 550, 100);
	bobObj3 = new Bob(300, 550, 100);
	bobObj4 = new Bob(400, 550, 100);
	bobObj5 = new Bob(500, 550, 100);
	rope1 = new Rope(bobObj1.body, roof.body, -bobDiameter1*2, 0);
	rope2 = new Rope(bobObj2.body, roof.body, -bobDiameter2*2, 0);
	rope3 = new Rope(bobObj3.body, roof.body, -bobDiameter3*2, 0);
	rope4 = new Rope(bobObj4.body, roof.body, -bobDiameter4*2, 0);
	rope5 = new Rope(bobObj5.body, roof.body, -bobDiameter5*2, 0);


	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
  
  
  drawSprites();
 
}
function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(bobObj1.body, bobObj1.body.position,{x:-505, y:0});
		
		
		
	}
}





