const startScreen = document.querySelector("#start-screen");
const startBtn = document.querySelector("#start-btn");
const gameScreen = document.querySelector("#game-screen");
const gameWrapper = document.querySelector("#game-wrapper");
const finishScreen = document.querySelector("#finish-screen");
const restartBtn = document.querySelector("#restart-btn");
const scoreNmb = document.querySelector("#score-number");
const levelNmb = document.querySelector("#level-number");
const game = new Game();
let pause = false;
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
  {
    name: "O",
    coordinates: [[0, 1, 10, 11]],
  },
  {
    name: "I",
    coordinates: [
      [0, 1, 2, 3],
      [0, 10, 20, 30],
    ],
  },
  {
    name: "T",
    coordinates: [
      [0, 1, 2, 11],
      [1, 10, 11, 21],
      [1, 10, 11, 12],
      [1, 11, 12, 21],
    ],
  },
  {
    name: "S",
    coordinates: [
      [1, 2, 10, 11],
      [0, 10, 11, 21],
    ],
  },
  {
    name: "Z",
    coordinates: [
      [0, 1, 11, 12],
      [1, 10, 11, 20],
    ],
  },
  {
    name: "J",
    coordinates: [
      [1, 11, 21, 20],
      [10, 20, 21, 22],
      [0, 1, 10, 20],
      [10, 11, 12, 22],
    ],
  },
  {
    name: "L",
    coordinates: [
      [0, 10, 20, 21],
      [10, 11, 12, 20],
      [0, 1, 11, 21],
      [2, 10, 11, 12],
    ],
  },
];

const cells = [];
//creating a grid of divs and pushing them to the array "cells"
for (let i = 0; i < 200; i++) {
  const cell = document.createElement("div");
  cell.className = "cell";
  cells.push(cell);
  // gameScreen.append(cell); //change to spread
}
gameScreen.append(...cells);

//listeners
startBtn.addEventListener("click", () => {
  startScreen.style.display = "none";
  gameWrapper.style.display = "block";
  /**
   * calling the function to start the figures to drop
   */
  nextFigure();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "p") {
    pause = !pause;
    console.log("pause");
  }
  if (pause) {
    return;
  }

  if (event.key === "ArrowLeft") {
    figure.moveLeft();
  } else if (event.key === "ArrowRight") {
    figure.moveRight();
  } else if (event.key === "r") {
    figure.rotate();
  } else if (event.key === "ArrowDown") {
    figure.fastDrop();
  }
});
