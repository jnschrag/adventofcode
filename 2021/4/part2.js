const fs = require("fs");
const path = require("path");
const text = fs.readFileSync(path.join(__dirname) + "/input.txt", "utf8");
let input = text.split("\n\n");

// Split input into numbers and boards
let numbers = input.shift().split(",");

// Boards
let boards = input.map((d) => {
  let board = d.split("\n");
  // console.log(board);
  let obj = {};

  for (let y = 0; y < board.length; y++) {
    const row = board[y];

    const nums = row.split(" ").filter((d) => d != "");
    // console.log(nums);
    for (let x = 0; x < nums.length; x++) {
      const num = nums[x];
      obj[num] = {
        called: false,
        x,
        y,
      };
    }
  }

  return {
    hasWon: false,
    numbers: obj,
  };
});

let hasWinner = false;
let finalScore;

while (!hasWinner) {
  for (let i = 0; i < numbers.length; i++) {
    winningNum = numbers[i];

    // Check all boards for current number being called
    for (let boardNum = 0; boardNum < boards.length; boardNum++) {
      const board = boards[boardNum];

      if (board.numbers[winningNum]) {
        board.numbers[winningNum].called = true;

        // If number found on board, check that numbers rows & columns to determine if its a winning board
        let isBoardWinner = checkBoardColsAndRows(
          board,
          board.numbers[winningNum]
        );

        if (isBoardWinner) {
          board.hasWon = true;

          // If we find a board that hasn't won yet, keep going - otherwise we've found our winner
          let haveAllBoardsWon = checkAllBoardsHaveWon(boards);
          if (haveAllBoardsWon) {
            // console.log(winningNum, boardNum);
            finalScore = calcFinalScore(board, winningNum);
            hasWinner = true;
            break;
          }
        }
      }
      if (hasWinner) break;
    }
    if (hasWinner) break;
  }
  // No winner found
  break;
}

function checkBoardColsAndRows(board, value) {
  let boardValues = Object.values(board.numbers);
  let isRowWinner =
    boardValues.filter((c) => c.y === value.y && c.called == true).length == 5
      ? true
      : false;

  let isColWinner =
    boardValues.filter((c) => c.x === value.x && c.called == true).length == 5
      ? true
      : false;

  if (isRowWinner || isColWinner) {
    return true;
  }
  return false;
}

function calcFinalScore(board, winningNum) {
  let sum = 0;
  for (const num in board.numbers) {
    if (Object.hasOwnProperty.call(board.numbers, num)) {
      const numInfo = board.numbers[num];
      if (!numInfo.called) {
        sum += +num;
      }
    }
  }

  return sum * winningNum;
}

function checkAllBoardsHaveWon(boards) {
  return boards.find((b) => !b.hasWon) ? false : true;
}

console.log(finalScore);
