TicTacToe.GameView = SC.View.extend(SC.ContentDisplay,{
  layerId: 'ticTacToeGame',
  contentDisplayProperties: 'currentPlayer'.w(),

  render: function(context, firstTime) {
    if(firstTime){
      context.push('<div id="whoseTurnIsIt">' + this._currentPlayerText() + '</div>');
    } else {
      this._whoseTurnIsItSection().html(this._currentPlayerText());
    }
    sc_super();
  },

  _currentPlayerText: function() {
    var currentPlayer = '';
    var content = this.get('content');
    if(content) currentPlayer = content.get('currentPlayer');
   return 'Player ' + currentPlayer + '\'s Turn';
  },

  _whoseTurnIsItSection: function() {
    return $('#whoseTurnIsIt');
  }
});