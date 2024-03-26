class Player {
  constructor({ collisionBlocks = [] }) {
    //properties of the class
    this.position = {
      x: 200,
      y: 200,
    };

    this.velocity = {
      x: 0,
      y: 0,
    };

    this.width = 32;
    this.height = 32;
    this.sides = {
      bottom: this.position.y + this.height,
    };
    this.gravity = 1;
    this.collisionBlocks = collisionBlocks;
  }

  draw() {
    //here it is what the player should look alike
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.position.x += this.velocity.x; // we need to add velocity for x axis as well
    this.checkForHorizontalCollisions();
    this.applyGravity();
    this.checkForVerticalCollisions();
  }

  checkForHorizontalCollisions() {
    //check for horizontal collisions
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i];
      //if collision exists
      if (
        this.position.x <= collisionBlock.position.x + collisionBlock.width &&
        this.position.x + this.width >= collisionBlock.position.x &&
        this.position.y + this.height >= collisionBlock.position.y &&
        this.position.y <= collisionBlock.position.y + collisionBlock.height
      ) {
        //collision on x axis going to the left
        if (this.velocity.x < 0) {
          this.position.x =
            collisionBlock.position.x + collisionBlock.width + 0.01;
          break; //once collid occurs we should immediatly get out of the loop
        }
        if (this.velocity.x > 0) {
          this.position.x = collisionBlock.position.x - this.width - 0.01;
          break;
        }
      }
    }
  }

  applyGravity() {
    //apply gravity
    this.velocity.y += this.gravity; // we need to had a velocity increasing each frame the simulate gravity
    this.position.y += this.velocity.y;
  }

  checkForVerticalCollisions() {
    //check for vertical collision
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i];
      //if collision exists
      if (
        this.position.x <= collisionBlock.position.x + collisionBlock.width &&
        this.position.x + this.width >= collisionBlock.position.x &&
        this.position.y + this.height >= collisionBlock.position.y &&
        this.position.y <= collisionBlock.position.y + collisionBlock.height
      ) {
        if (this.velocity.y < 0) {
          this.position.y =
            collisionBlock.position.y + collisionBlock.height + 0.05;
          break; //once collid occurs we should immediatly get out of the loop
        }
        if (this.velocity.y > 0) {
          this.position.y = collisionBlock.position.y - this.height - 0.05;
          break;
        }
      }
    }
  }
}
