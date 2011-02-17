TicTacToe.CellView = SC.View.extend(SC.ContentDisplay,{
  contentDisplayProperties: 'row column'.w(),

  init: function() {
    sc_super();
    this.set('classNames', ['markerBox', this.columnClass(), this.rowClass(), 'sc-view']);
  },

  layout: function() {
    var cell = this.get('content');
    return {top: (cell.get('row') - 1) * 100, left: (cell.get('column') - 1) * 100, height: 100, width: 100};
  }.property('row column').cacheable(),

  render: function(context, firstTime) {
    var content = this.get('content');
    sc_super();
  },

  columnClass: function() {
    var column = this.get('content').get('column');

    if(column == 1) return 'leftColumn';
    if(column == 2) return 'centerColumn';
    return 'rightColumn';
  }.property('column').cacheable(),

  rowClass: function() {
    var row = this.get('content').get('row');

    if(row == 1) return 'topRow';
    if(row == 2) return 'middleRow';
    return 'bottomRow';
  }.property('row').cacheable()
});