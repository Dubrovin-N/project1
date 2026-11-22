//class to make the exact figure that will be shown on the screen
class Figure {
  startPosition = 4;
  timer = null;
  i = 0; //shapeCoordinatesCounter
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
    this.shape.coordinates[this.i].forEach((element) => {
      const currentPosition = this.startPosition + element;
      cells[currentPosition].classList.add("active");
    });
  }

  undraw() {
    this.shape.coordinates[this.i].forEach((element) => {
      const currentPosition = this.startPosition + element;
      cells[currentPosition].classList.remove("active");
    });
  }
  /**
   * turns a figure to one that has finished its movement
   */
  turnToDropped() {
    this.shape.coordinates[this.i].forEach((element) => {
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
  ////

  ///
  /*   checkLeft() {
    if (this.startPosition % 10 === 0) {
      return false;
    }
    return true;
  } */
  checkLeft() {
    for (const coordinate of this.shape.coordinates[this.i]) {
      if ((this.startPosition + coordinate) % 10 === 0) {
        return false;
      } else if (
        cells[coordinate + this.startPosition - 1].classList.contains("dropped")
      ) {
        return false;
      }
    }
    return true;
  }

  /**
   * checks the right border
   * @returns false if the one of the cells of the shape stand on the right edge and can't move further
   * @returns false if the cell is already taken
   */
  checkRight() {
    for (const coordinate of this.shape.coordinates[this.i]) {
      if ((this.startPosition + coordinate + 1) % 10 === 0) {
        return false;
      } else if (
        cells[coordinate + this.startPosition + 1].classList.contains("dropped")
      ) {
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
    for (const coordinate of this.shape.coordinates[this.i]) {
      if (coordinate + this.startPosition >= 190) {
        return false;
      } else if (
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
    }, game.speed); //to change the speed in different levels
  }
  /**
   * check for if:
   * 1) below the game field
   * 2) has some part in the most left or right column
   * 3) the cell is already taken
   */
  checkNext() {
    //taking index of the next shape
    let nextIndex = this.i + 1;
    if (nextIndex === this.shape.coordinates.length) {
      nextIndex = 0;
    }

    let hasLeft = false;
    let hasRight = false;
    for (const coordinate of this.shape.coordinates[nextIndex]) {
      if (coordinate + this.startPosition >= 200) {
        return false;
      } else if (
        cells[coordinate + this.startPosition].classList.contains("dropped")
      ) {
        return false;
      } else if ((this.startPosition + coordinate) % 10 === 0) {
        hasLeft = true;
      } else if ((this.startPosition + coordinate) % 10 === 9) {
        hasRight = true;
      }
    }
    //if has both - return false
    if (hasLeft && hasRight) {
      return false;
    } else {
      return true;
    }
  }

  rotate() {
    if (this.checkNext()) {
      this.undraw();
      this.i = this.i + 1;
      if (this.i === this.shape.coordinates.length) {
        this.i = 0;
      }
      console.log(this.i);
      this.draw();
    }
  }

  //mutates the shapes!!! don't use
  /*   rotate() {
    if (this.checkBottom()) {
      this.undraw();
      this.shape.coordinates.push(this.shape.coordinates.shift());
      this.draw();
      console.log(this.i + "in rotate");
    }
  } */

  fastDrop() {
    if (this.checkBottom()) {
      this.undraw();
      this.startPosition += 10;
      this.draw();
    }
  }
}
