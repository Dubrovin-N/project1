//class to make the exact figure that will be shown on the screen
class Figure {
  startPosition = 4;
  constructor(shape) {
    this.shape = shape;
    this.draw();
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

  moveLeft() {
    if (this.startPosition >= 1) {
      this.undraw();
      this.startPosition--;
      this.draw();
    }
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
    if (this.checkRight()) {
      this.undraw();
      this.startPosition++;
      this.draw();
    }
  }
}
