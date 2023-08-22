class Game {
  constructor(board_size) {
    // The size (number of rows/columns) of the tic-tac-toe board.
    this.board_size = board_size;
    this.board = this.generateBoard();
    this.totalMoves = 0;
  }

  /**
   * Records a player with the given ID making a move at the given x and y
   * coordinates. The top left square is at coordinates (0,0).
   *
   * @param {number} player_id - The ID of the player making the move
   * @param {number} x - The X coordinate of the move
   * @param {number} y - The Y coordinate of the move
   *
   * @returns {boolean} True if the move results in the player winning the game,
   * false otherwise.
   *
   * @throws {InvalidMoveException} If the move is invalid for any reason
   */
  move(player_id, x, y) {
    if (x < 0 || x >= this.board_size || y < 0 || y >= this.board_size) {
      throw new InvalidMoveException(
        "Invalid move: Move is out of the board bounds"
      );
    }

    if (this.board[x][y] !== null) {
      throw new InvalidMoveException(
        "Invalid move: This cell has been already marked"
      );
    }

    this.board[x][y] = player_id;
    this.totalMoves++;

    if (this.checkResult(player_id, x, y)) {
      console.log(`Player: ${player_id} won!`);
      return true;
    }

    if (this.totalMoves === this.board_size * this.board_size) {
      console.log("The game has been tied");
      return false;
    }
    return false;
  }

  /**
   * Checks the game's status after each move to determine if there is a winner.
   *
   * Time complexity: O(n) where n is the size of the board.
   *
   * @param {number} player_id - The ID of the player making the move.
   * @param {number} x - The X coordinate of the move.
   * @param {number} y - The Y coordinate of the move.
   *
   * @returns {boolean} True if the player with the specified ID wins, false otherwise.
   */
  checkResult(player_id, x, y) {
    // Check for a winning row (Time complexity: O(n))
    if (this.board[x].every((el) => el === player_id)) {
      return true;
    }

    // Check for a winning column (Time complexity: O(n))
    const colMarkers = this.board.map((row) => row[y]);
    if (colMarkers.every((el) => el === player_id)) {
      return true;
    }

    // Check for a winning left diagonal (Time complexity: O(n))
    if (x === y) {
      const leftDiagMarkers = this.board.map((_, i) => this.board[i][i]);
      if (leftDiagMarkers.every((el) => el === player_id)) {
        return true;
      }
    }

    if (x + y === this.board_size - 1) {
      // Check for a winning right diagonal (Time complexity: O(n))
      const rightDiagMarkers = this.board.map(
        (_, i) => this.board[i][this.board_size - i - 1]
      );
      if (rightDiagMarkers.every((el) => el === player_id)) {
        return true;
      }
    }

    return false;
  }

  /* -------------------------------------------------------------------------- */
  /*                       Function to generate the board                       */
  /* -------------------------------------------------------------------------- */
  /**
   * Generates a new game board with the specified size, initializing each cell to null.
   *
   * Time complexity: O(n^2) where n is the size of the board.
   *
   * @returns {Array} An n x n array representing the game board where each cell initialized to null.
   */
  generateBoard() {
    const board = [];
    for (let i = 0; i < this.board_size; i++) {
      const row = [];
      for (let j = 0; j < this.board_size; j++) {
        row.push(null);
      }
      board.push(row);
    }
    return board;
  }
}

class InvalidMoveException extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidMoveException";
  }
}

module.exports = { Game, InvalidMoveException };