var prompt = require('prompt');
var helper = require('./helper');

var board = helper.board;

var count = 0;
var win = ' ';
var marker = 'X';

var play = function () {
  console.log('Player ' + marker + ', choose row: ');
  prompt.get(['pos'], function(err, row) {
    console.log('Row: ' + row.pos);
    console.log('Player ' + marker + ', choose column: ');
    prompt.get(['pos'], function(err, col) {
      console.log('Column: ' + col.pos);
      helper.updateBoard(row.pos, col.pos);
      helper.printBoard();
      if (checkWin()) {
        console.log('Player ' + win + ' wins!');
        process.end;
      } else {
        play();
      }
    })
  });
};

prompt.start();
helper.printBoard();
play();
