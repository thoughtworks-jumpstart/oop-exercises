class Cell {
  constructor(x, y, board) {
    this.xCoordinate = x;
    this.yCoordinate = y;
    this.board = board;
    this.isBomb = false;
  }

  _findTotalNeighbouringBombs() {
    const north = this.board.getCell(this.xCoordinate, this.yCoordinate - 1);
    const south = this.board.getCell(this.xCoordinate, this.yCoordinate + 1);
    const east = this.board.getCell(this.xCoordinate + 1, this.yCoordinate);
    const west = this.board.getCell(this.xCoordinate - 1, this.yCoordinate);

    const northEast = this.board.getCell(
      this.xCoordinate + 1,
      this.yCoordinate - 1
    );
    const northWest = this.board.getCell(
      this.xCoordinate - 1,
      this.yCoordinate - 1
    );
    const southEast = this.board.getCell(
      this.xCoordinate + 1,
      this.yCoordinate + 1
    );
    const southWest = this.board.getCell(
      this.xCoordinate - 1,
      this.yCoordinate + 1
    );

    const numOfTotalBombs = [
      north,
      south,
      east,
      west,
      northEast,
      northWest,
      southEast,
      southWest
    ].filter(cell => (cell ? cell.isBomb : false)).length;

    return numOfTotalBombs;
  }

  setAsBomb() {
    this.isBomb = true;
  }

  displayValue() {
    if (this.isBomb) {
      return "Bomb";
    }
    const nearbyBombs = this._findTotalNeighbouringBombs();
    if (nearbyBombs) {
      return nearbyBombs;
    }
    return "";
  }
}

module.exports = Cell;
