// ==========================================================================
// Project:   TicTacToe
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals TicTacToe */

TicTacToe = SC.Application.create();

TicTacToe.main = function () {
  TicTacToe.mainStatechart.initStatechart();
};

jQuery(document).ready(function() {
  TicTacToe.mainPane = SC.TemplatePane.append({
    layerId: 'tic-tac-toe',
    templateName: 'tic-tac-toe'
  });
});

TicTacToe.Cell = SC.Object.extend();

TicTacToe.Game = SC.Object.extend({
  cells: []
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