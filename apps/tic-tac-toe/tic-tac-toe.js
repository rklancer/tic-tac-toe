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

TicTacToe.Cell = SC.Object.extend({
  row: null,
  column: null
});

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
      cells = game.set('cells', []).get('cells'),
      row, col;

    for (row = 1; row <= 3; row++) {
      for (col = 1; col <= 3; col++) {
        cells.pushObject(TicTacToe.Cell.create({row: row, column: col}));
      }
    }

  return game;
};


TicTacToe.gameController = SC.Object.create();

TicTacToe.currentCellController = SC.Object.create();


TicTacToe.gameView = SC.TemplateView.create({
  layerId: 'ticTacToeGame',
  whoseTurnIsItBinding: 'TicTacToe.currentGame.currentPlayer'
});


TicTacToe.gameBoardView = SC.TemplateCollectionView.create({
  layerId: 'gameBoard',
  contentBinding: 'TicTacToe*currentGame.cells'
});


TicTacToe.CellView = SC.TemplateView.extend({
  columnBinding: '.parentView.content.column',
  rowBinding: '.parentView.content.row',
  belongsToPlayerBinding: '.parentView.content.belongsToPlayer',
  
  positionalClasses: function () {
    var columns = ['undef', 'leftColumn', 'centerColumn', 'rightColumn'],
        rows    = ['undef', 'topRow',     'middleRow',    'bottomRow'  ],
        
        col     = this.getPath('parentView.content.column') || 0,
        row     = this.getPath('parentView.content.row')    || 0;
        
    return columns[col] + ' ' + rows[row];
  }.property('row', 'column'),
  
  top: function () {
    return (this.getPath('parentView.content.row') - 1) * 100;
  }.property('row'),
  
  left: function () {
    return (this.getPath('parentView.content.column') -1 ) * 100;
  }.property('column'),
  
  mark: function () {
    var markFor = ["", "X", "O"],
        player  = this.get('belongsToPlayer') || 0 ;

    return markFor[player];
  }.property('belongsToPlayer'),
  
  playerClass: function () {
    var classFor = ['', 'player1', 'player2'],
        player  = this.get('belongsToPlayer') || 0 ;
        
    return classFor[player];
  },
  
  mouseEntered: function(event) {
    TicTacToe.currentCellController.set('content', this.getPath('parentView.content'));
  },
  
  mouseUp: function(event) {
    TicTacToe.mainStatechart.sendEvent('markCell');
  }
  
});
