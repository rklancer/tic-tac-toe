TicTacToe.GameBoardView = SC.View.extend({

  render: function(context, firstTime) {
    context.push('<div id="gameBoard"></div>')
    sc_super();
  }
});