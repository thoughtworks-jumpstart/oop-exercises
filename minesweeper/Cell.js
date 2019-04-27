const _findTotalNeighbouringBombs = new WeakMap();
const _board = new WeakMap();

class Cell {
  constructor(x, y, board) {
    this.xCoordinate = x;
    this.yCoordinate = y;
    this.isBomb = false;
    _board.set(this, board);

    _findTotalNeighbouringBombs.set(this, () => {
      const board = _board.get(this);
      const north = board.getCell(this.xCoordinate, this.yCoordinate - 1);
      const south = board.getCell(this.xCoordinate, this.yCoordinate + 1);
      const east = board.getCell(this.xCoordinate + 1, this.yCoordinate);
      const west = board.getCell(this.xCoordinate - 1, this.yCoordinate);

      const northEast = board.getCell(
        this.xCoordinate + 1,
        this.yCoordinate - 1
      );
      const northWest = board.getCell(
        this.xCoordinate - 1,
        this.yCoordinate - 1
      );
      const southEast = board.getCell(
        this.xCoordinate + 1,
        this.yCoordinate + 1
      );
      const southWest = board.getCell(
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
    });
  }

  setAsBomb() {
    this.isBomb = true;
  }

  displayValue() {
    if (this.isBomb) {
      return "Bomb";
    }
    const nearbyBombs = _findTotalNeighbouringBombs.get(this)();
    if (nearbyBombs) {
      return nearbyBombs;
    }
    return "";
  }
}

module.exports = Cell;
