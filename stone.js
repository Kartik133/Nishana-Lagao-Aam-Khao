class Stone {
   constructor(x,y,width,height) {
      var options = {
            isStatic:false,
            restitution:0,
            friction:1,
          }
      this.x = x;
      this.y = y;
      this.width=width;
      this.height=height;
      this.image = loadImage("stone.png");
      this.body=Bodies.rectangle(this.x, this.y, this.width,this.height,options);
      World.add(world, this.body);
    }

   display() {
      var stonePos=this.body.position;
      push();
      translate(stonePos.x, stonePos.y);
	   rotate(this.body.angle)
	   fill(255,0,255)
	   imageMode(CENTER);
	   ellipseMode(CENTER);
      rectMode(CENTER);
	   image(this.image,0,0,this.width,this.height);
	   pop();  
   }

}