TicTacToe.main = function main() {
  var game = TicTacToe.Game.createNewGame();
  TicTacToe.gameController.set('content', game);
  TicTacToe.getPath('mainPage.mainPane').append();
} ;

TicTacToe.shutdown = function() {
  TicTacToe.mainPage.get('mainPane').remove();
  TicTacToe.gameController.get('content').destroy();
};

function main() { TicTacToe.main(); }
