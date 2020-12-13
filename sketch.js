var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1,box3,box2;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("vapor55.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	box1 = createSprite(350,654,200,20);
    box1.shapeColor = "red";

	box2 = createSprite(260,619,20,100);
	box2.shapeColor = "blue";

	box2 = createSprite(440,619,20,100);
	box2.shapeColor = "blue";

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 189, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.4

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  
  packageSprite.collide(groundSprite);
  if(packageSprite.isTouching(box1)){
	  packageSprite.velocityY = 0;
  }

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    console.log("down")
	Matter.Body.setStatic(packageBody, false);

  }
}



