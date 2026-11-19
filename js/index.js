const gameScreen = document.querySelector("#game-screen");
//let figure = [];
/**
 * function to create a new random figure
 * random must be inside of the function
 */
let nextFigure = () => {
  random = Math.floor(Math.random() * 7); // must be here
  figure = new Figure(shapes[random]);
};
//all the possible geometrical shapes for the game
const shapes = [
  { name: "O", coordinates: [0, 1, 10, 11], rotation: [+2, +2, +2, +2] },
  { name: "I", coordinates: [0, 1, 2, 3], rotation: [+2, +11, +20, +29] },
  { name: "T", coordinates: [0, 1, 2, 11], rotation: [+2, +2, +2, +22] },
  { name: "S", coordinates: [1, 2, 10, 11], rotation: [+2, +1, +2, +2] },
  { name: "Z", coordinates: [0, 1, 11, 12], rotation: [+2, +2, +2, +2] },
  { name: "J", coordinates: [1, 11, 21, 20], rotation: [+2, +2, +2, +2] },
  { name: "L", coordinates: [0, 10, 20, 21], rotation: [+2, +2, +2, +2] },
];

const cells = [];
//creating a grid of divs and pushing them to the array "cells"
for (let i = 0; i < 200; i++) {
  const cell = document.createElement("div");
  cell.className = "cell";
  cells.push(cell);
  gameScreen.append(cell);
}

//listeners
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    figure.moveLeft();
  } else if (event.key === "ArrowRight") {
    figure.moveRight();
  }
});

/**
 * calling the function to start the figures to drop
 */
nextFigure();
