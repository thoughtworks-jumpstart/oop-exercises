const Board = require("../Board");
const Cell = require("../Cell");

describe("Board", () => {
  test("should create a board of height 3 and width 2", () => {
    const firstBoard = new Board(3, 2);

    expect(firstBoard.board.length).toBe(3);
    expect(firstBoard.board[0].length).toBe(2);
  });

  test("should return cell of coordinate 0,1", () => {
    const firstBoard = new Board(3, 2);

    expect(firstBoard.getCell(0, 1)).toEqual(new Cell(0, 1, firstBoard));
  });

  test("should print board and values of cells", () => {
    const firstBoard = new Board(3, 2);
    firstBoard.getCell(0, 0).setAsBomb();

    expect(firstBoard.printBoard()).toEqual([["Bomb", 1], [1, 1], ["", ""]]);
  });
});
