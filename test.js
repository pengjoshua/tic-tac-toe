var expect = require('chai').expect;
let mocha = require('mocha');
var helper = require('./helper');

describe('Create board!', function() {
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

  it('should create a new board', function(done) {
    expect(board).to.deep.equal(helper.board);
    done();
  });

  it('should place an X in row 0, col 0 for the first move', function(done) {
    var newBoard = {
      1: 'X',
      2: ' ',
      3: ' ',
      4: ' ',
      5: ' ',
      6: ' ',
      7: ' ',
      8: ' ',
      9: ' '
    }
    var count = 0;
    var win = ' ';
    var marker = 'X';
    helper.updateBoard.apply(board, ['0', '0']);
    newBoard[1] = 'X';
    expect(board).to.deep.equal(newBoard);
    done();
  });

  it('should place an O in row 0, col 1 for the second move', function(done) {
    var newBoard = {
      1: 'X',
      2: 'O',
      3: ' ',
      4: ' ',
      5: ' ',
      6: ' ',
      7: ' ',
      8: ' ',
      9: ' '
    }
    helper.updateBoard.apply(board, ['0', '1']);
    newBoard[1] = 'X';
    expect(board).to.deep.equal(newBoard);
    done();
  });

  it('should place an X in row 1, col 1 for the third move', function(done) {
    var newBoard = {
      1: 'X',
      2: 'O',
      3: ' ',
      4: ' ',
      5: 'X',
      6: ' ',
      7: ' ',
      8: ' ',
      9: ' '
    }
    helper.updateBoard.apply(board, ['1', '1']);
    newBoard[1] = 'X';
    expect(board).to.deep.equal(newBoard);
    done();
  });

  it('should place an O in row 2, col 0 for the fourth move', function(done) {
    var newBoard = {
      1: 'X',
      2: 'O',
      3: ' ',
      4: ' ',
      5: 'X',
      6: ' ',
      7: 'O',
      8: ' ',
      9: ' '
    }
    helper.updateBoard.apply(board, ['2', '0']);
    newBoard[1] = 'X';
    expect(board).to.deep.equal(newBoard);
    done();
  });

  it('should place an X in row 2, col 2 for the fifth move and player X should win', function(done) {
    var newBoard = {
      1: 'X',
      2: 'O',
      3: ' ',
      4: ' ',
      5: 'X',
      6: ' ',
      7: 'O',
      8: ' ',
      9: 'X'
    }
    helper.updateBoard.apply(board, ['2', '2']);
    newBoard[1] = 'X';
    var result = helper.checkWin.call(board);
    expect(board).to.deep.equal(newBoard);
    expect(result).to.deep.equal(true);
    done();
  });
})
