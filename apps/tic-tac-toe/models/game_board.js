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
  }
});