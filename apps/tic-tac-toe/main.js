TicTacToe.main = function main() {

  var gameBoard = TicTacToe.GameBoard.createInitialBoard();
  TicTacToe.gameBoardController.set('content', gameBoard);
  TicTacToe.getPath('mainPage.mainPane').append() ;
} ;

TicTacToe.shutdown = function() {
  TicTacToe.mainPage.get('mainPane').remove();
  TicTacToe.gameBoardController.set('content', null);
};

function main() { TicTacToe.main(); }
