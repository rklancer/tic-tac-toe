TicTacToe.Game = SC.Object.extend({

});

TicTacToe.Game.createNewGame = function() {
  return TicTacToe.Game.create({ board: TicTacToe.GameBoard.createInitialBoard()});
};