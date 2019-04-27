const Cell = require("./Cell");

const _height = new WeakMap();
const _width = new WeakMap();
const _createArray = new WeakMap();

class Board {
  constructor(height, width) {
    _height.set(this, height);
    _width.set(this, width);

    _createArray.set(this, () => {
      return [...Array(_height.get(this))].map(
        (element, yIndex) =>
          (element = [...Array(_width.get(this))].map(
            (element, xIndex) => new Cell(xIndex, yIndex, this)
          ))
      );
    });

    this.board = _createArray.get(this)();
  }

  getCell(xCoordinate, yCoordinate) {
    if (xCoordinate > _width.get(this) - 1 || xCoordinate < 0) return undefined;
    if (yCoordinate > _height.get(this) - 1 || yCoordinate < 0)
      return undefined;
    return this.board[yCoordinate][xCoordinate];
  }

  printBoard() {
    return this.board.map(row => row.map(cell => cell.displayValue()));
  }
}

module.exports = Board;
