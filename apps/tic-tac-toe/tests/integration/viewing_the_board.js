describe('Viewing the board', function() {
  describe('Given an empty board', function() {
    var board, firstTime = true;

    beforeEach(function() {
      board = TicTacToe.GameBoard.create();
    });

    afterEach(function() {
      board.destroy();
    });

    describe('When I launch the game', function() {
      beforeEach(function() {
        SC.RunLoop.begin();
        board.setup();
        TicTacToe.gameBoardController.set('content', board);
        TicTacToe.mainPage.get('mainPane').append();
        SC.RunLoop.end();
      });

      afterEach(function() {
        TicTacToe.mainPage.get('mainPane').remove();
        TicTacToe.gameBoardController.set('content', null);
      });

      it('Then I should see the board', function() {
        expect(SC.CoreQuery('#gameBoard').length).toBe(1);
      });

      it('Then I should see no marks on the board', function() {
        expect(SC.CoreQuery('.playerMark').length).toBe(0);
      });

      it('Then I should see 9 boxes to select', function() {
        expect(SC.CoreQuery('.markerBox').length).toBe(9);
      });
    });
  });
});