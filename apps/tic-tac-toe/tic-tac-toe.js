// ==========================================================================
// Project:   TicTacToe
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals TicTacToe */

TicTacToe = SC.Application.create();

jQuery(document).ready(function() {
  TicTacToe.main();
});

TicTacToe.main = function () {
  TicTacToe.mainStatechart.initStatechart();
};

TicTacToe.appendMainPane = function () {
  if (!$.isReady) return;
  
  TicTacToe.mainPane = SC.TemplatePane.append({
    layerId: 'tic-tac-toe',
    templateName: 'tic-tac-toe'
  });
};

TicTacToe.Cell = SC.Object.extend();

TicTacToe.Game = SC.Object.extend({
  cells: [],
  
  markCell: function (cell) {
    if (cell.get('belongsToPlayer') === undefined) {
      cell.set('belongsToPlayer', 1);
      return YES;
    }
    return NO;
  }
});

TicTacToe.Game.createNewGame = function () {
  var game = TicTacToe.Game.create(),
      cells = game.get('cells'),
      i;
  
  for (i = 1; i <= 9; i++) {
    cells.pushObject(TicTacToe.Cell.create());
  }
  return game;
};

TicTacToe.gameController = SC.Object.create();

TicTacToe.currentCellController = SC.Object.create();