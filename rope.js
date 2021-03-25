class rope{
    constructor(bodyA, bodyB,x,y){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 100,
            length: 10
        }
    this,x=x;
    this.y=y;    
    this.rope=Constraint.create(options);
    World.add(world,this.rope);
    
    }
    display(){
        var pointA= this.rope.bodyA.position;
        var pointB= this.rope.bodyB.position;
        
        strokeWeight(1)
        var ax = pointA.x
        var ay = pointA.y
        var ax1 = pointB+this.x
        var ay2 = pointB+this.y
        fill(255);
        line (ax,ay,ax1,ay2);
    }

}

 