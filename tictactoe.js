var prompt = require('prompt');
prompt.start();

var boardLine1 = ['_','|','_','|','_'];
var boardLine2 = ['_','|','_','|','_'];
var boardLine3 = [' ','|',' ','|',' '];

var movesArray = [];
var player = true;

var moves = [{11:boardLine1[0]},
             {12:boardLine1[2]},
             {13:boardLine1[4]},
             {21:boardLine2[0]},
             {22:boardLine2[2]},
             {23:boardLine2[4]},
             {31:boardLine3[0]},
             {32:boardLine3[2]},
             {33:boardLine3[4]}
];

var openingLines = function() {
  console.log('Welcome to TicTacToe.');
  console.log('This is your board');
  console.log(board);
  console.log('It is X\'s turn');
  askForMove(true, boardLine1, boardLine2, boardLine3);
};

var askForMove = function(player, boardLine1, boardLine2, boardLine3) {
  console.log('This is your board');
  console.log(boardLine1.join('') + '\n' + boardLine2.join('') + '\n' + boardLine3.join(''));
  console.log('It is ' + player + '\'s turn.');
  console.log('Enter a new move by typing the horizontal line number (1, 2, or 3) and vertical line number (1, 2, or 3) of the space you want to mark.');
  prompt.get(['Your move: '], function(err, move) {
    if (err) { 
      return onErr(err); 
    } else if (!validMove(move, board)) {
      console.log('That is not a valid move.');
      askForMove(player, board);
    }
    else {
      var row = move[0];
      var column = move[1];
      var marker = player ? 'X' : 'O';
      if (row === 1) {
        boardLine1[column] = marker;
      } else if (row === 2) {
        boardLine2[column] = marker;
      } else if (row === 3) {
        boardLine3[column] = marker;
      }
    }
  });
  if (!checkForWinner(boardLine1, boardLine2, boardLine3) ) {
    askForMove(!player, boardLine1, boardLine2, boardLine3);
  };
}

var validMove(move, board) {
  var row = move[0];
  var column = move[1];
  if (row === 1) {
    if (boardLine1[column] != '_') {
      return false;
    } else {
      return true;
    } 
  } else if (row === 2) {
    if (boardLine2[column] != '_') {
      return false;
    } else {
      return true;
    }
  } else if (row === 3) {
    if (boardLine3[column] != ' ') {
      return false;
    } else {
      return true;
    }
  }
} 

var checkForWinner = function(boardLine1, boardLine2, boardLine3) {

}
