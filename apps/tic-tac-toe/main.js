sc_require('statecharts/main_statechart');
sc_require('models/game');
sc_require('resources/main_page');
TicTacToe.main = function main() {
  TicTacToe.mainStatechart.initStatechart();
} ;

function main() { TicTacToe.main(); }
