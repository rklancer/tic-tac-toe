TicTacToe.CellView = SC.View.extend(SC.ContentDisplay,{
  contentDisplayProperties: 'row column belongsToPlayer'.w(),

  layout: function() {
    var cell = this.get('content');
    return {top: (cell.get('row') - 1) * 100, left: (cell.get('column') - 1) * 100, height: 100, width: 100};
  }.property('content').cacheable(),

  render: function(context, firstTime) {
    var content = this.get('content');
    this._renderClasses(context, firstTime);
    this._renderContent(context, firstTime);
    sc_super();
  },

  mouseEntered: function(event) {
    TicTacToe.currentCellController.set('content', this.get('content'));
  },

  mouseDown: function(event) {
    return YES;
  },

  mouseUp: function(event) {
    TicTacToe.mainStatechart.sendEvent('markCell');
  },

  belongsToPlayer1: function() {
    if(!this.get('content')) return false;
    return this.get('content').get('belongsToPlayer') == 1;
  },

  belongsToPlayer2: function() {
    if(!this.get('content')) return false;
    return this.get('content').get('belongsToPlayer') == 2;
  },

  _columnClass: function() {
    var column = this.get('content').get('column');

    if(column == 1) return 'leftColumn';
    if(column == 2) return 'centerColumn';
    return 'rightColumn';
  }.property('content').cacheable(),

  _rowClass: function() {
    var row = this.get('content').get('row');

    if(row == 1) return 'topRow';
    if(row == 2) return 'middleRow';
    return 'bottomRow';
  }.property('content').cacheable(),

  _renderClasses: function(context, firstTime) {
    context.addClass('markerBox');
    context.addClass(this._columnClass());
    context.addClass(this._rowClass());
    if(this.belongsToPlayer1()) context.addClass('player1');
    if(this.belongsToPlayer2()) context.addClass('player2');
  },

  _renderContent: function(context, firstTime) {
    if(this.belongsToPlayer1()) context.push('X');
    if(this.belongsToPlayer2()) context.push('O');
  }
});