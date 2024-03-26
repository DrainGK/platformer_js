class Sprite {
    constructor({ position, imageSrc }) {
      this.position = position; //we're passing the position values throught the parameter
      this.image = new Image();
      this.image.onload = () => {
          this.loaded = true; // to be sure if the image is loaded, we call onload (which apply only when loaded) and turn the bool to true
      }
      this.image.src = imageSrc;
      this.loaded = false;
    }
    draw() {
      if(!this.loaded) return
      ctx.drawImage(this.image, this.position.x, this.position.y);
    }
  }