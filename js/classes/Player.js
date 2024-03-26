class Player {
    constructor() {
      //properties of the class
      this.position = {
        x: 100,
        y: 100,
      };

      this.velocity = {
        x:0,
        y:0,
      }
  
      this.width = 100;
      this.height = 100;
      this.sides = {
          bottom: this.position.y + this.height
      };
      this.gravity = 1;
    }
  
    draw() {
      //here it is what the player should look alike
      ctx.fillStyle = "red";
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  
    update(){
        this.position.x += this.velocity.x; // we need to add velocity for x axis as well
        this.position.y += this.velocity.y;
        this.sides.bottom = this.position.y + this.height; // we need to recalculate each frame!

        //above bottom of canvas
      if (this.sides.bottom + this.velocity.y < canvas.height) {
            this.velocity.y += this.gravity; // we need to had a velocity increasing each frame the simulate gravity
        } else {
            this.velocity.y = 0;
        }
    }
}