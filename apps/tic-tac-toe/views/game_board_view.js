sc_require('views/cell_view');
TicTacToe.GameBoardView = SC.CollectionView.extend({
  layerId: 'gameBoard',
  exampleView: TicTacToe.CellView,
  canEditContent: NO,
  canReorderContent: NO,
  canDeleteContent: NO
});