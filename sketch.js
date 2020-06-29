const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var bird1;
var log1;

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(125,535,50,50);
    box2 = new Box(275,535,50,50);
    pig1 = new Pig(200,535,20,20);
    bird1 = new Bird(50,200,30,30);
    //log1 = new Log(100,370,10,50,PI/4);
    //log2 = new Log(100,370,10,50,PI/4);
    log3 = new Log(200,450,200,10,0);
    //log4 = new Log(200,450,10,50,0);
    ground = new Ground(300,height-30,600,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    text(mouseX+";"+mouseY,20,20);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    bird1.display();
    //log1.display();
    log3.display();
    ground.display();
}