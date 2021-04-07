/*class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.slingShot = Constraint.create(options);
        World.add(world, this.slingShot);
    }

    display(){
       if (this.slingShot.bodyA) {

        var pointA = this.slingShot.bodyA.position;
        var pointB = this.slingShot.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);

       }
       
        
    }
    fly() {
    this.slingShot.bodyA = null;


    }

}*/
/*class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            isStatic:false,
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA=null

        }
    display(){
        if (this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
       
    }
   
}*/
class Slingshot{
    constructor(body, anchor){
        var option={
            bodyA: body,
            pointB: anchor,
            stiffness: 0.004,
            length: 1
        }
        
        this.bodyA=body
            this.pointB=anchor
            this.slingshot=Constraint.create(option)
            World.add(world,this.slingshot)
        }
    
        attach(body){
            this.slingshot.bodyA=body;
        }
    
        fly()
        {
            this.slingshot.bodyA=null;
        }
    
        display()
        {
            if(this.slingshot.bodyA)
            {
                var pointA=this.bodyA.position;
                var pointB=this.pointB
    
                strokeWeight(2);		
                line(pointA.x,pointA.y,pointB.x,pointB.y);
            }
        }
    }
