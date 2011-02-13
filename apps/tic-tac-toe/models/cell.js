TicTacToe.Cell = SC.Object.extend({

  columnName: function() {
    if(this.get('column') == 1) return 'left';
    if(this.get('column') == 2) return 'center';
    return 'right';
  }.property('column').cacheable(),

  rowName: function() {
    if(this.get('row') == 1) return 'top';
    if(this.get('row') == 2) return 'middle';
    return 'bottom';
  }.property('row').cacheable()
});