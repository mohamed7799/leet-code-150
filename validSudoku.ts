function isValidSudoku(board: string[][]): boolean {
  let rowMap = new Map();
  let colMap = new Map();
  let gridMap = new Map();

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      let currentCell = board[row][col];
      if (currentCell !== ".") {
        const grid: string = `${Math.floor(row / 3)}${Math.floor(col / 3)}`;
        if (!rowMap.get(row)) {
          rowMap.set(row, new Set());
        }
        if (!colMap.get(col)) {
          colMap.set(col, new Set());
        }
        if (!gridMap.get(grid)) {
          gridMap.set(grid, new Set());
        }

        if (
          rowMap.get(row).has(currentCell) ||
          colMap.get(col).has(currentCell) ||
          gridMap.get(grid).has(currentCell)
        ) {
          return false;
        }

        colMap.get(col).add(currentCell);
        rowMap.get(row).add(currentCell);
        gridMap.get(grid).add(currentCell);
      }
    }
  }

  return true;
}

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
