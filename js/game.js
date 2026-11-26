class Game {
  speed = 1000;
  points = 0;
  interval = null;
  constructor(level) {
    this.level = level;
  }

  clearLevel() {
    let toggle = 0;
    //rows
    for (let i = 0; i <= 19; i++) {
      //cells of a row
      for (let j = 0; j <= 9; j++) {
        //count number of cells marked as "dropped"
        if (cells[i * 10 + j].classList.contains("dropped")) {
          toggle = toggle + 1;
        }
        // if we have 10 cells marked as "dropped"
        if (toggle === 10) {
          //we cut them out to a new array
          let deletedRow = cells.splice(i * 10 + j - 9, 10);
          // we turn them inactive
          for (let cell of deletedRow) {
            cell.classList.remove("dropped");
          }
          // we add them to the beginning of the cells grid
          cells.unshift(...deletedRow);
          // rerender the whole grid

          gameScreen.append(...cells);
          this.points++;
          console.log(this.points + "hi");
        }
      }
      toggle = 0;
    }
  }
  //animation of the gameOver
  gameOver() {
    let i = 0;
    let flag = false;
    this.interval = setInterval(() => {
      if (!flag && i < 200) {
        cells[i].classList.add("dropped");
        i++;
      }
      if (!flag && i === 200) {
        flag = true;
        i = 0;
      } else if (flag && i < 200) {
        cells[i].classList.remove("dropped");
        i++;
      } else if (flag && i === 200) {
        clearInterval(this.interval);
        gameScreen.style.display = "none";
        finishScreen.style.display = "flex";
      }

      /*       cells[i].classList.add("dropped");
      if (i < 199) {
        i++;
      }else if()
      cells[i].classList.remove("dropped");
      if (i >= 0) {
        i--;
      } */
    }, 10);
  }
}
//rules?
