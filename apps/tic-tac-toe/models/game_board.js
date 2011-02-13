TicTacToe.GameBoard = SC.Object.extend({

  init: function() {
    this.set('cells', []);
    sc_super();
  },

  setup: function() {
    for(var row = 1; row <= 3; row++) {
      for(var col = 1; col <= 3; col++) {
        this.get('cells').pushObject(TicTacToe.Cell.create({row: row, column: col}));
      }
    }
  },

  cellAt: function(row, col) {
    return this.get('cells').objectAt((row - 1) * 3 + col -1)
  }
});