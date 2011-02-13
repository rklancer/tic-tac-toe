describe('GameBoardView', function() {
  describe('#render', function() {
    var view;
    beforeEach(function() {
      view = TicTacToe.GameBoardView.create();
      view.createLayer();
    });

    it('renders the gameBoard div', function() {
      expect(view.$('#gameBoard').length).toBe(1);
    });
  });
});