//class to make the exact figure that will be shown on the screen
class Figure {
  startPosition = 4;
  timer = null;
  constructor(shape) {
    this.shape = shape;
    this.draw();
    this.drop();
  }

  /**
   * going through all the coordiantes of a shape (and adding the startPosition),
   * turn the cells of the grid to active to show the shape
   */
  draw() {
    this.shape.coordinates.forEach((element) => {
      const currentPosition = this.startPosition + element;
      cells[currentPosition].classList.add("active");
    });
  }

  undraw() {
    this.shape.coordinates.forEach((element) => {
      const currentPosition = this.startPosition + element;
      cells[currentPosition].classList.remove("active");
    });
  }
  /**
   * turns a figure to one that has finished its movement
   */
  turnToDropped() {
    this.shape.coordinates.forEach((element) => {
      const currentPosition = this.startPosition + element;
      cells[currentPosition].classList.add("dropped");
    });
  }

  moveLeft() {
    if (this.checkLeft() && this.timer) {
      this.undraw();
      this.startPosition--;
      this.draw();
    }
  }

  checkLeft() {
    if (this.startPosition % 10 === 0) {
      return false;
    }
    return true;
  }

  /**
   * checks the right border
   * @returns false if the one of the cells of the shape stand on the right edge and can't move further
   */
  checkRight() {
    for (const coordinate of this.shape.coordinates) {
      if ((this.startPosition + coordinate + 1) % 10 === 0) {
        return false;
      }
    }
    return true;
  }
  //forEach ignores "return"
  // checkRight() {
  //   this.shape.coordinates.forEach((element) => {
  //    ((this.startPosition + element + 1) % 10 > 0);
  //   });
  // }
  moveRight() {
    if (this.checkRight() && this.timer) {
      this.undraw();
      this.startPosition++;
      this.draw();
    }
  }

  /**
   *
   * @returns false if coordinate of the figure is too low or if coordiante is already taken
   */
  checkBottom() {
    for (const coordinate of this.shape.coordinates) {
      if (coordinate + this.startPosition >= 189) {
        return false;
      }
      if (
        cells[coordinate + this.startPosition + 10].classList.contains(
          "dropped",
        )
      ) {
        return false;
      }
    }
    return true;
  }

  drop() {
    this.timer = setInterval(() => {
      if (this.checkBottom()) {
        this.undraw();
        this.startPosition += 10;
        this.draw();
      } else {
        clearInterval(this.timer);
        this.timer = null;
        this.undraw(); //clear the style
        this.turnToDropped(); //set a style as a dropped figure
        nextFigure(); //once one figure is dropped, drop a new one
      }
    }, 1000);
  }
}
