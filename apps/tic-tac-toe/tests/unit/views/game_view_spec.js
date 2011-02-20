describe('TicTacToe.GameView', function() {
  var view;

  describe('#layerId', function() {
    beforeEach(function() {
      view = TicTacToe.GameView.create();
    });

    it('has a layer id of ticTacToeGame', function() {
      expect(view.get('layerId')).toBe('ticTacToeGame');
    });
  });

  describe('#render', function() {
    var game, context,rendersChildViewsSpy, addContentSpy;
    beforeEach(function() {
      context = {push: function(){}};
      addContentSpy = spyOn(context, 'push');
      game = TicTacToe.Game.create();
      view = TicTacToe.GameView.create({content: game});
      spyOn(view, '_currentPlayerText').andReturn('Player 1\'s Turn');
      rendersChildViewsSpy = spyOn(view, 'renderChildViews');
    });

    describe('when it is the first time rendering the view', function() {
      beforeEach(function() {
        view.render(context, true);
      });

      it('adds whose turn it is to it\'s html', function() {
        expect(addContentSpy).toHaveBeenCalledWith('<div id="whoseTurnIsIt">Player 1\'s Turn</div>');
      });

      it('renders it\'s child views', function() {
        expect(rendersChildViewsSpy).toHaveBeenCalledWith(context, true);
      });
    });

    describe('when it is updating the view', function() {
      var whoseTurnIsItSpy, jQueryObject;
      beforeEach(function() {
        jQueryObject = {html: function() {}};
        spyOn(view, '_whoseTurnIsItSection').andReturn(jQueryObject);
        whoseTurnIsItSpy = spyOn(jQueryObject, 'html');

        view.render(context, false);
      });

      it('does not rerender it\'s child views', function() {
        expect(rendersChildViewsSpy).not.toHaveBeenCalled();
      });

      it('updates the whose turn is it section to be the correct player\'s turn', function() {
        expect(whoseTurnIsItSpy).toHaveBeenCalledWith('Player 1\'s Turn');
      });
    });
  });
});