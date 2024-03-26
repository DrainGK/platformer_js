const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

const parsedCollisions = collisionsLevel1.parse2D();
const collisionBlocks = parsedCollisions.createObjectsFrom2D();

const backgroundLevel1 = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: "./assets/img/backgroundLevel1.png",
});

const player = new Player();
const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
};
function animate() {
  //I think, I the typing game I called it updateCanvas
  window.requestAnimationFrame(animate); //the function is looping on it self because RequestAF need a function and you call animate who's calling RAF
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height); // To clear the canvas each times, for moving not growing

  backgroundLevel1.draw();
  collisionBlocks.forEach((collisionBlock) => {
    collisionBlock.draw();
  });

  player.velocity.x = 0;
  if (keys.d.pressed) player.velocity.x = 10;
  else if (keys.a.pressed) player.velocity.x = -10;

  player.draw();
  player.update();
}

animate();
