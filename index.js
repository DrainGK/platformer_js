const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

let parsedCollisions;
let collisionBlocks;
let backgroundLevel1;
  

let level = 1;
let levels = {
  1: {
    init: () => {
        const parsedCollisions = collisionsLevel1.parse2D();
        const collisionBlocks = parsedCollisions.createObjectsFrom2D();
        const backgroundLevel1 = new Sprite({
            position: {
            x: 0,
            y: 0,
            },
            imageSrc: "./assets/img/backgroundLevel1.png",
        });
    },
  },
};


const player = new Player({
  collisionBlocks, //equal (JS feature with same name) to collisionBlocks(paremeter): collisionsBlocks(blocks from the utils.js method)
  imageSrc: "./assets/img/king/idle.png",
  frameRate: 11,
  animations: {
    idleRight: {
      frameRate: 11,
      frameBuffer: 2,
      loop: true,
      imageSrc: "./assets/img/king/idle.png",
    },
    idleLeft: {
      frameRate: 11,
      frameBuffer: 2,
      loop: true,
      imageSrc: "./assets/img/king/idleLeft.png",
    },
    runRight: {
      frameRate: 8,
      frameBuffer: 4,
      loop: true,
      imageSrc: "./assets/img/king/runRight.png",
    },
    runLeft: {
      frameRate: 8,
      frameBuffer: 4,
      loop: true,
      imageSrc: "./assets/img/king/runLeft.png",
    },
    enterDoor: {
      frameRate: 8,
      frameBuffer: 4,
      loop: false,
      imageSrc: "./assets/img/king/enterDoor.png",
      onComplete: () => {
        console.log("completed");
        gsap.to(overlay, {
          opacity: 1,
        });
      },
    },
  },
});

const doors = [
  new Sprite({
    position: {
      x: 767,
      y: 270,
    },
    imageSrc: "./assets/img/doorOpen.png",
    frameRate: 5,
    frameBuffer: 5,
    loop: false,
    autoplay: false,
  }),
];

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

const overlay = {
  opacity: 0,
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
  doors.forEach((door) => {
    door.draw();
  });

  player.handleInput(keys);
  player.draw();
  player.update();

  ctx.save();
  ctx.globalAlpha = overlay.opacity;
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
}

animate();
