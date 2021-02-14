class Ground{

    constructor(x,y){

     this.body=Bodies.rectangle(x,y,700,15,{isStatic:true})
     this.width=700
     this.height=15

     World.add(world,this.body)

    }
    display(){

        var pos=this.body.position
 
        push()
        fill("brown")
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height)
        pop()

    }

}