const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World =  Matter.World;

var MyEngine,MyWorld;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  MyEngine = Engine.create();
  MyWorld = MyEngine.world;
  
  var ground_options = {
    'isStatic' : true,

  }
  ground = Bodies.rectangle(200,390,400,10,ground_options);
  World.add(MyWorld,ground);
  
  var ball_options = {
    'restitution' : 1.2,
     'density' : 1,
  }

  ball = Bodies.circle(200,200,20,ball_options);
  World.add(MyWorld,ball);
}

function draw() {
  background(0);  
  Engine.update(MyEngine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
}