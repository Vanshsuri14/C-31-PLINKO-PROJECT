const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var ground,world;
var engine;
var divisionHeight = 300;

var particles = [];
var plinkos = [];
var divisions = [];



function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
 
  ground = new Ground(600,height,1200,20);

  for(var k = 0; k <=width; k = k + 80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));


  }
  for(var j = 40; j <=width; j = j + 50){
    plinkos.push(new Plinko(j,75));

  }

  for(var j = 15; j <=width; j = j + 50){
    plinkos.push(new Plinko(j,175));

  }

  for(var j = 40; j <=width; j = j + 50){
    plinkos.push(new Plinko(j,275));

  }
  for(var j = 16; j <=width; j = j + 50){
    plinkos.push(new Plinko(j,375));

  }

  


}

function draw() {
  background(0); 

  Engine.update(engine);
  
  ground.display();

  for(var j =0; j < divisions.length; j++){ 
    divisions[j].display(); 
  }

  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();

  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

  for(var j = 0; j < particles.length; j++){
    particles[j].display();

  }

  
  drawSprites();
}