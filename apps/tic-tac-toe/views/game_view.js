TicTacToe.GameView = SC.View.extend(SC.ContentDisplay,{
  layerId: 'ticTacToeGame',
  contentDisplayProperties: 'currentPlayer'.w(),
  displayProperties: 'content'.w(),

  render: function(context, firstTime) {

    var currentPlayer = '';
    var content = this.get('content');

    if(content) {
      currentPlayer = content.get('currentPlayer');
    }
    context.push('<div id="whoseTurnIsIt">Player ', currentPlayer, '\'s Turn</div>');
    sc_super();
  }
});