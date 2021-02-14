class Ball{

    constructor(x,y){

    var options={
        isStatic:false,
        density:1,
        friction:1
    }

     this.body=Bodies.circle(x,y,40,options)
     World.add(world,this.body)

    }
    display(){

        var pos=this.body.position

        push()
        fill("grey")
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,this.width,this.height)
        pop()

    }

}