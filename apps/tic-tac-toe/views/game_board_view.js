TicTacToe.GameBoardView = SC.View.extend(SC.ContentDisplay,{
  contentDisplayProperties: ''.w(),

  render: function(context, firstTime) {
    var content = this.get('content');
    if(content){
      var cells = content.get('cells');

      context.push('<div id="gameBoard">');
      cells.forEach(function(cell) {
        context.push('<div class="markerBox ', cell.get('columnName'), 'Column ', cell.get('rowName'), 'Row"></div>');
      });
      context.push('</div>');
    }
    sc_super();
  }
});