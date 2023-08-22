const { Game, InvalidMoveException } = require("./tic-tac-toe");

describe("TicTacToeGame", () => {
  beforeEach(() => {
    game = new Game(3);
  });

  test("move with valid coordinates", () => {
    expect(() => game.move(1, 0, 0)).not.toThrow();
    expect(() => game.move(2, 1, 1)).not.toThrow();
  });

  test("move with invalid coordinates", () => {
    expect(() => game.move(1, 0, -1)).toThrow(InvalidMoveException);
    expect(() => game.move(1, -1, 0)).toThrow(InvalidMoveException);
    expect(() => game.move(2, 0, 3)).toThrow(InvalidMoveException);
  });

  test("move to an already occupied cell", () => {
    game.move(1, 0, 0);
    expect(() => game.move(2, 0, 0)).toThrow(InvalidMoveException);
  });

  test("game should work for a 1x1 board size", () => {
    const smallGame = new Game(1);
    expect(smallGame.move(1, 0, 0)).toBe(true);
  });

  test("check for winning condition in a row", () => {
    game.move(1, 0, 0);
    game.move(1, 0, 1);
    expect(game.move(1, 0, 2)).toBe(true);
  });

  test("check for winning condition in a column", () => {
    game.move(1, 0, 0);
    game.move(1, 1, 0);
    expect(game.move(1, 2, 0)).toBe(true);
  });

  test("check for winning condition in left diagonal", () => {
    game.move(1, 0, 0);
    game.move(1, 1, 1);
    expect(game.move(1, 2, 2)).toBe(true);
  });

  test("check for winning condition in a right diagonal", () => {
    game.move(1, 0, 2);
    game.move(1, 1, 1);
    expect(game.move(1, 2, 0)).toBe(true);
  });

  test("check for a tie", () => {
    game.move(1, 0, 0);
    game.move(2, 1, 1);
    game.move(1, 0, 2);
    game.move(2, 0, 1);
    game.move(1, 2, 1);
    game.move(2, 1, 0);
    game.move(1, 1, 2);
    game.move(2, 2, 2);
    expect(game.move(1, 2, 0)).toBe(false);
  });

  test("check that the game continues", () => {
    game.move(1, 0, 0);
    expect(game.move(2, 1, 1)).toBe(false);
  });
});
