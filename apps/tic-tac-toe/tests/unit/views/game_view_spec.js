describe('TicTacToe.GameView', function() {
  var view;

  describe('#layerId', function() {
    beforeEach(function() {
      view = TicTacToe.GameView.create();
      view.createLayer();
    });

    it('has a layer id of ticTacToeGame', function() {
      expect(view.get('layerId')).toBe('ticTacToeGame');
    });
  });

  describe('#render', function() {
    var game, rendersChildViewsSpy;
    beforeEach(function() {
      game = TicTacToe.Game.create({currentPlayer: 1});
      view = TicTacToe.GameView.create({content: game});
      rendersChildViewsSpy = spyOn(view, 'renderChildViews');
      view.createLayer();
    });

    it('renders whose turn it is', function() {
      expect(view.$('#whoseTurnIsIt').html()).toContain('Player 1');
    });

    it('renders it\'s child views', function() {
      expect(rendersChildViewsSpy).toHaveBeenCalled();
    });
  });
});