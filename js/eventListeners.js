//event object contains all the proprieties associate with the event that just occured
window.addEventListener("keydown", (event) => {
  if (player.preventInput) return
  switch (event.key) {
    case "w":
      for (let i = 0; i < doors.length; i++) {
        const door = doors[i];

        if (
          player.hitbox.position.x + player.hitbox.width <= door.position.x + door.width && //right side 
          player.hitbox.position.x  >= door.position.x && //left side equation
          player.hitbox.position.y + player.hitbox.height >= door.position.y &&
          player.hitbox.position.y <= door.position.y + door.height
        ) {
          player.velocity.x = 0;
          player.velocity.y = 0;
          player.preventInput = true;
          player.switchSprite('enterDoor');
          door.play();
          return
        }
      }
      if (player.velocity.y === 0) player.velocity.y = -13;
      break;
    case "a":
      keys.a.pressed = true;
      break;
    case "d":
      keys.d.pressed = true;
      break;
  }
});
window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "a":
      keys.a.pressed = false;
      break;
    case "d":
      keys.d.pressed = false;
      break;
  }
});
//If we try to go on the other directions, all the mouvement we'll stop. Then
//we need to figure out which key is pressed or notWSD
