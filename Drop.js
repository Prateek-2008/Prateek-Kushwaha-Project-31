class Drop{
    constructor(x,y){
        
        var options= {
            isStatic:false,
            friction:0.1,
            restitutuion:0.1
        }
        
        this.body= Bodies.circle(x,y,4,options)
        this.radius=4;
        World.add(world,this.body);
  
       

    }

    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
        }
    }

    display(){
        //var pos= this.body.position;
        //var angle= this.body.angle;
        //push();
        //translate(pos.x,pos.y)
        //rotate(angle)
        ellipseMode(RADIUS);
        fill("blue"); 
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);

        

        
        //pop();
    }

    
}

