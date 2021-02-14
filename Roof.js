class Roof{

    constructor(x,y){

     this.body=Bodies.rectangle(x,y,500,24,{isStatic:true})
     this.width=400
     this.height=24

     World.add(world,this.body)

    }
    display(){

        var pos=this.body.position
 
        push()
        strokeWeight(4)
        stroke("grey")
        fill("white")
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height)
        pop()

    }

}