const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drops;

function preload(){
    
}

function setup(){
    var canvas = createCanvas(550,700);
    engine = Engine.create();
    world = engine.world;
    
    drops=new Drop(350,10,5);
}

function draw(){
    background("black");
    Engine.update(engine);

    drops.display();
   

}   

