TicTacToe.GameBoardView = SC.View.extend(SC.ContentDisplay,{
  contentDisplayProperties: ''.w(),
  layerId: 'gameBoard',

  render: function(context, firstTime) {
    var content = this.get('content');
    if(content){
      var cells = content.get('cells');
      var view = this;
      this.removeAllChildren();
      cells.forEach(function(cell) {
        view.appendChild(TicTacToe.CellView.create({content: cell}));
      });
    }
    sc_super();
  }
});