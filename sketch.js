const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }

   object= Bodies.rectangle(200,390,400,20,object_options);
    World.add(world,object);

    var options ={
        restitution:1

    }
    box=Bodies.rectangle(50,50,70,70, options)
    World.add(world, box)

    ball=Bodies.circle(300,50,40, options)
    World.add(world, ball)

   


    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,400,20);
    rectMode(CENTER)
    rect(box.position.x,box.position.y,70,70)
    ellipseMode(RADIUS)
    ellipse(ball.position.x, ball.position.y, 40, 40)
}
