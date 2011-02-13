TicTacToe.main = function main() {

  var gameBoard = TicTacToe.GameBoard.create();
  gameBoard.setup();
  TicTacToe.gameBoardController.set('content', gameBoard);
  TicTacToe.getPath('mainPage.mainPane').append() ;
} ;

function main() { TicTacToe.main(); }
