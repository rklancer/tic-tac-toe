describe('Viewing the board', function() {
  describe('Given an empty board', function() {
    var board;

    beforeEach(function() {
      board = TicTacToe.GameBoard.create();
    });

    describe('When I launch the game', function() {
      beforeEach(function() {
        SC.RunLoop.begin();
        TicTacToe.main();
        SC.RunLoop.end();
      });

      afterEach(function() {
        TicTacToe.mainPage.get('mainPane').remove();
      });

      it('Then I should see the board', function() {
        expect(SC.CoreQuery('#gameBoard').length).toBe(1);
      });

      it('Then I should see no marks on the board', function() {
        expect(SC.CoreQuery('.playerMark').length).toBe(0);
      });
    });
  });
});