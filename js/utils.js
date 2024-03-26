Array.prototype.parse2D = function () {
  const rows = [];
  for (let i = 0; i < this.length; i += 16) {
    rows.push(this.slice(i, i + 16));
  }

  return rows;
};

/*
prototype is a fundamental feature that allows to add properties and methods
to all instances of a particular type of object.
any array in the code will inherit the method createObjectsFrom2D

This method createObjectsFrom2D is designed to be used with a 2D array structure. 
It iterates over each row and each element within the row. If the value of an element
is equal to 292, it creates a new CollisionBlock object and pushes it into the 
objects array. Finally, it returns the array containing all the created CollisionBlock objects.
*/
Array.prototype.createObjectsFrom2D = function(){
    const objects = [];
    this.forEach((row, y) => {
        //here y is position.y of the row
        row.forEach((symbol, x) => {
          //now that we have rows, we can devide by number of tiles, then x is position.x of tiles
          if (symbol === 292) {
            // push a new collision into collisionblocks array
            objects.push(
              new CollisionBlock({
                position: {
                  x: x * 64,
                  y: y * 64, //multiply by size of the tile
                },
              })
            );
          }
        });
      });
      return objects;
}