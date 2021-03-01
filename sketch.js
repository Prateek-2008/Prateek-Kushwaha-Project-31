const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var drop=[];
var random;
var maxDrop=100;

function setup(){
    var canvas = createCanvas(300,500);

    engine = Engine.create();
    world = engine.world;

    if(frameCount % 150 === 0){
        for(var i=0; i<maxDrop; i++){
            drop.push(new Drop(random(0,400),random(0,400)));
        }
}

}

function draw(){
    background(0,0,0);

    Engine.update(engine);
    for(i=0; i<maxDrop; i++){
        drop[i].update();
        drop[i].display();
    }
}   
