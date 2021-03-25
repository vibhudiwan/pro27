
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;
var Ball1,Roof1,Ball2,Ball3,Ball4,Ball5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Ball1=new Ball(200,440,40);
    Roof1=new roof(400,100,600,20);
	Ball2=new Ball(290,440,40);
	Ball3=new Ball(370,440,40);
	Ball4=new Ball(450,440,40);
	Ball5=new Ball(530,440,40);
	sling1= new rope(Ball1.body,Roof1.body,-50*2,0);
    sling2= new rope(Ball2.body,Roof1.body,-25*2,0);
    sling3= new rope(Ball3.body,Roof1.body,-0*2,0);
    sling4= new rope(Ball4.body,Roof1.body,25*2,0);
    sling5= new rope(Ball5.body,Roof1.body,50*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  text(mouseX+','+mouseY,20,35);
  Ball1.display();
  Ball2.display();
  Ball3.display();
  Ball4.display();
  Ball5.display();
  Roof1.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  
  drawSprites();
 
}




