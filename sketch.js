const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world;
var ball, ground, box;

function setup() {

  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var ballp = {restitution: 1};
  ball = Bodies.circle(200,50,30,ballp);
  World.add(world,ball);

  var groundp = {isStatic: true};
  ground = Bodies.rectangle(200,400, 400,10, groundp);
  World.add(world,ground);

  var boxp = {density: 0.95, friction:3, 'restitution' : 0.7};
  box = Bodies.rectangle(300,70, 30, 55, boxp);
  World.add(world,box);
}

function draw() {

  Engine.update(engine);
  background(255,255,255);  
  
  fill("green");
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 30,30);


  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400,10);

  rectMode(CENTER);
  rect(box.position.x, box.position.y, 30,55);
  
  console.log(box.position.y);
}