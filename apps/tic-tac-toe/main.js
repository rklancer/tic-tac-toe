TicTacToe.main = function main() {

  var gameBoard = TicTacToe.GameBoard.createInitialBoard();
  TicTacToe.gameBoardController.set('content', gameBoard);
  TicTacToe.getPath('mainPage.mainPane').append() ;
} ;

function main() { TicTacToe.main(); }
