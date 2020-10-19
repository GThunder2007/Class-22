
const Engine  = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var ourworld,ourengine, ground, ball;

function setup() {
  createCanvas(400,400);
  ourengine = Engine.create();
  ourworld = ourengine.world;

  var options = {
    isStatic: true

  }

  var ball_options = {
    restitution: 0.8

  }

  ground = Bodies.rectangle(200,390,400,20,options);
  ball = Bodies.circle(200,200,20,ball_options)
  World.add(ourworld,ground);
  World.add(ourworld, ball);
  //console.log(object)

 
}

function draw() {
  Engine.update(ourengine);
  background(0);  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  
}