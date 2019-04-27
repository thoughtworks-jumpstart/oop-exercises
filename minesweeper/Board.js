const Cell = require("./Cell");

class Board {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.board = this.createArray(height, width);
  }

  createArray(height, width) {
    return [...Array(height)].map(
      (element, yIndex) =>
        (element = [...Array(width)].map(
          (element, xIndex) => new Cell(xIndex, yIndex, this)
        ))
    );
  }

  getCell(xCoordinate, yCoordinate) {
    if (xCoordinate > this.width - 1 || xCoordinate < 0) return undefined;
    if (yCoordinate > this.height - 1 || yCoordinate < 0) return undefined;
    return this.board[yCoordinate][xCoordinate];
  }

  printBoard() {
    return this.board.map(row => row.map(cell => cell.displayValue()));
  }
}

module.exports = Board;
