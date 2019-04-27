const Cell = require("../Cell");
const Board = require("../Board");

describe("Cell", () => {
  test("should return displayed value of 'Bomb' if cell contains a bomb", () => {
    const board1 = new Board(3, 3);
    const cell1 = board1.getCell(1, 1);
    cell1.setAsBomb();

    expect(cell1.displayValue()).toEqual("Bomb");
  });

  test("should return displayed value of '' if cell is not a bomb and is not next to any bombs", () => {
    const board1 = new Board(3, 3);

    const cell1 = board1.getCell(1, 1);

    expect(cell1.displayValue()).toEqual("");
  });

  test("should return displayed value of 2 if cell is next to two bombs", () => {
    const board1 = new Board(3, 3);
    board1.getCell(0, 1).setAsBomb();
    board1.getCell(2, 1).setAsBomb();

    const cell1 = board1.getCell(1, 1);

    expect(cell1.displayValue()).toEqual(2);
  });

  test("should return displayed value of 1 if there is a bomb on the northEast and northWest of cell", () => {
    const board1 = new Board(3, 3);
    board1.getCell(2, 0).setAsBomb();
    board1.getCell(0, 0).setAsBomb();

    const cell1 = board1.getCell(1, 1);

    expect(cell1.displayValue()).toEqual(2);
  });

  test("should return displayed value of 2 if there is a bomb on the southEast and southWest of cell", () => {
    const board1 = new Board(3, 3);
    board1.getCell(2, 2).setAsBomb();
    board1.getCell(0, 2).setAsBomb();

    const cell1 = board1.getCell(1, 1);

    expect(cell1.displayValue()).toEqual(2);
  });
});
