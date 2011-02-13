describe('GameBoardView', function() {
  describe('#render', function() {
    var view;
    beforeEach(function() {
      var board = TicTacToe.GameBoard.create();
      board.setup();
      view = TicTacToe.GameBoardView.create({content: board});
      view.createLayer();
    });

    it('has a layer id of gameBoard', function() {
      expect(view.get('layerId')).toBe('gameBoard');
    });

    it('renders each of the boxes to place a marker', function() {
      expect(view.$('.markerBox').length).toBe(9);
    });

    it('renders 3 left column markers', function() {
      expect(view.$('.leftColumn').length).toBe(3);
    });

    it('renders 3 center column markers', function() {
      expect(view.$('.centerColumn').length).toBe(3);
    });

    it('renders 3 right column markers', function() {
      expect(view.$('.rightColumn').length).toBe(3);
    });

    it('renders 3 top row markers', function() {
      expect(view.$('.topRow').length).toBe(3);
    });

    it('renders 3 middle row markers', function() {
      expect(view.$('.middleRow').length).toBe(3);
    });

    it('renders 3 bottom row markers', function() {
      expect(view.$('.middleRow').length).toBe(3);
    });
  });
});