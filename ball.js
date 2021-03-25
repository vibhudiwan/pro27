class Ball{
              constructor(x,y,r){
                  var options= {
                      'restitution':1.2,
                      'isStatic':false,
                      'density':3,
                      'friction':0
                  }
                  this.x=x;
                  this.y=y;
                  this.r=r;

                this.body=Bodies.circle(this.x,this.y,this.r/2,options)
                World.add(world,this.body);

              }
              


              display(){
                  var pos = this.body.position;
                  push();
                  translate(pos.x,pos.y);
                  rotate(this.body.angle);
                  fill(255);
                  ellipseMode(CENTER);
                  ellipse(0,0,this.r,this.r);
                  pop();
                  
  

}
}