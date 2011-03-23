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