TicTacToe.GameBoardView = SC.View.extend(SC.ContentDisplay,{
  contentDisplayProperties: 'cells'.w(),
  layerId: 'gameBoard',

  render: function(context, firstTime) {
    var content = this.get('content');
    var cells = [];

    if(content){
      cells = content.get('cells');
    }

    var view = this;
    this.removeAllChildren();
    cells.forEach(function(cell) {
      view.appendChild(TicTacToe.CellView.create({content: cell}));
    });
    this.renderChildViews(context, firstTime);
  },

  createChildViews: function() {}
});