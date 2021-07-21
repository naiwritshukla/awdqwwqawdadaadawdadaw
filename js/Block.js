class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution : 0.4,
            friction : 0,
            //isStatic:true
           
        }
        this.Visibility = 255
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("block.png");
        World.add(world, this.body);
      }
      display(){
        //console.log(this.body.speed);
        if(this.body.speed<3){
          image(this.image , this.body.position.x , this.body.position.y , this.width , this.height);
        }
        else{
          World.remove(world,this.body);
          push()
          this.Visibility = this.Visibility - 4
          tint(255,this.Visibility);
          image(this.image , this.body.position.x , this.body.position.y , this.width , this.height);
         pop()
        }
      }
    }