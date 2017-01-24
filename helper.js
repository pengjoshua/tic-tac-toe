var prompt = require('prompt');

var board = {
  1: ' ',
  2: ' ',
  3: ' ',
  4: ' ',
  5: ' ',
  6: ' ',
  7: ' ',
  8: ' ',
  9: ' '
};

var count = 0;
var win = ' ';
var marker = 'X';

var printBoard = function() {
  console.log(' ' + board[1] + ' | ' + board[2] + ' | ' + board[3] + '\n'
            + '-----------\n'
            + ' ' + board[4] + ' | ' + board[5] + ' | ' + board[6] + '\n'
            + '-----------\n'
            + ' ' + board[7] + ' | ' + board[8] + ' | ' + board[9]);
};

var updateBoard = function(row, col) {
  marker = (count % 2 === 0) ? 'X' : 'O';
  row = JSON.parse(row);
  col = JSON.parse(col);
  // console.log('row', row, 'col', col);
  if (row === 0 && col === 0) {
    // console.log('Player ' + marker + ' chose top left');
    this[1] = marker;
  } else if (row === 0 && col === 1) {
    // console.log('Player ' + marker + ' chose top middle');
    this[2] = marker;
  } else if (row === 0 && col === 2) {
    // console.log('Player ' + marker + ' chose top right');
    this[3] = marker;
  } else if (row === 1 && col === 0) {
    // console.log('Player ' + marker + ' chose middle left');
    this[4] = marker;
  } else if (row === 1 && col === 1) {
    // console.log('Player ' + marker + ' chose center');
    this[5] = marker;
  } else if (row === 1 && col === 2) {
    // console.log('Player ' + marker + ' chose middle right');
    this[6] = marker;
  } else if (row === 2 && col === 0) {
    // console.log('Player ' + marker + ' chose bottom left');
    this[7] = marker;
  } else if (row === 2 && col === 1) {
    // console.log('Player ' + marker + ' chose bottom middle');
    this[8] = marker;
  } else if (row === 2 && col === 2) {
    // console.log('Player ' + marker + ' chose bottom middle');
    this[9] = marker;
  } else {
    // console.log('Invalid move');
    count--;
  }
  count++;
  marker = (count % 2 === 0) ? 'X' : 'O';
};

var checkWin = function() {
  if (this[1] === this[2] && this[2] === this[3] && this[1] !== ' ') {
    win = (this[1] === 'X') ? 'X' : 'O';
  } else if (this[4] === this[5] && this[5] === this[6] && this[4] !== ' ') {
    win = (this[1] === 'X') ? 'X' : 'O';
  } else if (this[7] === this[8] && this[8] === this[9] && this[7] !== ' ') {
    win = (this[1] === 'X') ? 'X' : 'O';
  } else if (this[1] === this[4] && this[4] === this[7] && this[1] !== ' ') {
    win = (this[1] === 'X') ? 'X' : 'O';
  } else if (this[2] === this[5] && this[5] === this[8] && this[2] !== ' ') {
    win = (this[1] === 'X') ? 'X' : 'O';
  } else if (this[3] === this[6] && this[6] === this[9] && this[3] !== ' ') {
    win = (this[1] === 'X') ? 'X' : 'O';
  } else if (this[1] === this[5] && this[5] === this[9] && this[1] !== ' ') {
    win = (this[1] === 'X') ? 'X' : 'O';
  } else if (this[7] === this[5] && this[5] === this[3] && this[7] !== ' ') {
    win = (this[1] === 'X') ? 'X' : 'O';
  } else {
    // do nothing
  }
  if (win !== ' ') {
    return true;
  }
  return false;
}

var play = function () {
  console.log('Player ' + marker + ', choose row: ');
  prompt.get(['pos'], function(err, row) {
    console.log('Row: ' + row.pos);
    console.log('Player ' + marker + ', choose column: ');
    prompt.get(['pos'], function(err, col) {
      console.log('Column: ' + col.pos);
      updateBoard(row.pos, col.pos);
      printBoard();
      if (checkWin()) {
        console.log('Player ' + win + ' wins!');
        process.end;
      } else {
        play();
      }
    })
  });
};

// printBoard();
// play();

module.exports = {
  board: board,
  count: count,
  win: win,
  marker: marker,
  printBoard: printBoard,
  updateBoard: updateBoard,
  checkWin: checkWin,
  play: play
}
