const gameScreen = document.querySelector("#game-screen");

//all the possible geometrical shapes for the game
const shapes = [
  { name: "I", coordinates: [0, 1, 10, 11] },
  { name: "O", coordinates: [0, 1, 2, 3] },
  { name: "T", coordinates: [0, 1, 2, 11] },
  { name: "S", coordinates: [1, 2, 10, 11] },
  { name: "Z", coordinates: [0, 1, 11, 12] },
  { name: "J", coordinates: [1, 11, 21, 20] },
  { name: "L", coordinates: [0, 10, 20, 21] },
];

const cells = [];
//creating a grid of divs and pushing them to the array "cells"

const random = Math.floor(Math.random() * 7);

for (let i = 0; i < 200; i++) {
  const cell = document.createElement("div");
  cell.className = "cell";
  cells.push(cell);
  gameScreen.append(cell);
}
//
const figure = new Figure(shapes[random]);

//listeners
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    figure.moveLeft();
  } else if (event.key === "ArrowRight") {
    figure.moveRight();
  }
});
