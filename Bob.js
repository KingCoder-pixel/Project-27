class Bob
{
    constructor(x, y, d)
    {
        var options = {
            isStatic:false,
            restitution:1.0,
            friction:3.0,
            density:1.5
        }
        this.d=d; 
        this.y=y; 
        this.x=x;  
        this.body=Bodies.circle(this.x, this.y, this.d/2, options);
        
        World.add(world, this.body);
    }
    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill ("red");
        circle(0, 0, this.d)
        pop ();

    }
}