class Drops{
    constructor(x,y){
        var options={
            friction: 0.1
        }

        this.rain= Bodies.circle(x,y,5,options);
        this.raduis=5;
        

        

        World.add(world, this.rain);
        
    }
display(){
    var pos=this.rain.position;
    push();

        ellipseMode(RADIUS);
        fill("blue");
       
    ellipse(pos.x,pos.y, this.raduis, this.raduis);
    pop();
    


} 


update(){
   if(this.rain.position.y>700){
        Matter.Body.setPosition(this.rain,{x:random(0,400), y:random(0,400)});
    }
}

}

