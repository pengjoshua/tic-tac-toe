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
  console.log('row', row, 'col', col);
  if (row === 0 && col === 0) {
    console.log('Player ' + marker + ' chose top left');
    board[1] = marker;
  } else if (row === 0 && col === 1) {
    console.log('Player ' + marker + ' chose top middle');
    board[2] = marker;
  } else if (row === 0 && col === 2) {
    console.log('Player ' + marker + ' chose top right');
    board[3] = marker;
  } else if (row === 1 && col === 0) {
    console.log('Player ' + marker + ' chose middle left');
    board[4] = marker;
  } else if (row === 1 && col === 1) {
    console.log('Player ' + marker + ' chose center');
    board[5] = marker;
  } else if (row === 1 && col === 2) {
    console.log('Player ' + marker + ' chose middle right');
    board[6] = marker;
  } else if (row === 2 && col === 0) {
    console.log('Player ' + marker + ' chose bottom left');
    board[7] = marker;
  } else if (row === 2 && col === 1) {
    console.log('Player ' + marker + ' chose bottom middle');
    board[8] = marker;
  } else if (row === 2 && col === 2) {
    console.log('Player ' + marker + ' chose bottom middle');
    board[9] = marker;
  } else {
    console.log('Invalid move');
    count--;
  }
  count++;
  marker = (count % 2 === 0) ? 'X' : 'O';
};

var checkWin = function() {
  if (board[1] === board[2] && board[2] === board[3] && board[1] !== ' ') {
    win = (board[1] === 'X') ? 'X' : 'O';
  } else if (board[4] === board[5] && board[5] === board[6] && board[4] !== ' ') {
    win = (board[1] === 'X') ? 'X' : 'O';
  } else if (board[7] === board[8] && board[8] === board[9] && board[7] !== ' ') {
    win = (board[1] === 'X') ? 'X' : 'O';
  } else if (board[1] === board[4] && board[4] === board[7] && board[1] !== ' ') {
    win = (board[1] === 'X') ? 'X' : 'O';
  } else if (board[2] === board[5] && board[5] === board[8] && board[2] !== ' ') {
    win = (board[1] === 'X') ? 'X' : 'O';
  } else if (board[3] === board[6] && board[6] === board[9] && board[3] !== ' ') {
    win = (board[1] === 'X') ? 'X' : 'O';
  } else if (board[1] === board[5] && board[5] === board[9] && board[1] !== ' ') {
    win = (board[1] === 'X') ? 'X' : 'O';
  } else if (board[7] === board[5] && board[5] === board[3] && board[7] !== ' ') {
    win = (board[1] === 'X') ? 'X' : 'O';
  } else {
    // do nothing
  }
  if (win !== ' ') {
    return true;
  }
  return false;
}

prompt.start();

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

printBoard();
play();
