sc_require('statecharts/main_statechart');
sc_require('models/game');
sc_require('resources/main_page');
TicTacToe.main = function main() {
  TicTacToe.mainStatechart.initStatechart();
} ;

TicTacToe.shutdown = function() {
  TicTacToe.mainPage.get('mainPane').remove();
  TicTacToe.gameController.get('content').destroy();
  if(TicTacToe.currentGame.destroy) TicTacToe.currentGame.destroy();
};

function main() { TicTacToe.main(); }
