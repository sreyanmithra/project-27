
const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
const Render=Matter.Render

var ground
var ball1,ball2,ball3,ball4,ball5
var roof
var rope1,rope2,rope3,rope4,rope5

function setup(){

  createCanvas(700,400)

  engine=Engine.create()
  world=engine.world

  ball1=new Ball(200,300)
  ball2=new Ball(280,300)
  ball3=new Ball(360,300)
  ball4=new Ball(440,300)
  ball5=new Ball(520,300)

  ground=new Ground(350,392)
  roof=new Roof(350,14)

  var render=Render.create({

	  element:document.body,
	  engine:engine,
	  options:{
	  width:700,
	  height:400,
	  wireframes: false

	  }

	})

  rope1=new Rope(ball1.body,{x:200,y:14})
  rope2=new Rope(ball2.body,{x:280,y:14})
  rope3=new Rope(ball3.body,{x:360,y:14})
  rope4=new Rope(ball4.body,{x:440,y:14})
  rope5=new Rope(ball5.body,{x:520,y:14})


  Engine.run(engine);
  
}

function draw(){

  Engine.update(engine)

  background("skyBlue")

  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()

  ground.display()
  roof.display()

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
 
 
}

function keyPressed(){

  if (keyCode===UP_ARROW){
  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-40,y:-10})

  }
}





