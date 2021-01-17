const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;
	boxlside = new Box(700,550,150,15);
	boxrside = new Box(770,500,15,100);
	boxdside = new Box(630,500,15, 100);
  paperObject = new Paper(100,300,24);
  
  ground = new Ground(500,560,10000,10);


   
	
	
	

	
	
	Engine.run(engine);
}

function preload(){
 
 



}

function draw() {
  rectMode(CENTER);
  background(234);
  boxlside.display();
  boxrside.display();
  boxdside.display();
  ground.display();
  paperObject.display();
 

  


  drawSprites();
 


}


function keyPressed (){
if(keyCode === 38){

Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:23,y:-23});

}




}

