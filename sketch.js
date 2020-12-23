
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var bottomside;
var leftside;
var heloo;
var bin_load;
function preload() {
  bin_load = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
  heloo = Bodies.rectangle(370, 650, 200, 20, {isStatic:true});
  World.add(world, heloo);
	ball = new Paper(230, 200, 20);
	ground = new Ground(400, 700, 800, 100);
  bottomside = new Bin(480, 600);
  leftside = new Bin(590, 600);
  Engine.run(engine);

  
}


function draw() {
  image(bin_load, 480, 600);
  rectMode(CENTER);
  background(0);
  ball.display();
  ground.display();
  bottomside.display();
 leftside.display();
  Engine.update(engine);
  drawSprites();
  keyPressed();
 
}
function keyPressed() {
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball.body,ball.body.position, {x:450, y:400})
  }
}