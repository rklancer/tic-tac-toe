describe('Trying to mark an already marked cell', function() {
  describe('When I launch the game', function() {
    beforeEach(function() {
      SC.RunLoop.begin();
      TicTacToe.mainStatechart.gotoState('startGame');
      SC.RunLoop.end();
    });

    afterEach(function() {
      SC.RunLoop.begin();
      TicTacToe.mainStatechart.gotoState('endGame');
      SC.RunLoop.end();
    });

    describe('When I mark the center cell', function() {
      beforeEach(function() {
        clickOn(SC.CoreQuery('.centerColumn.middleRow'));
      });

      describe('When I try to mark the center cell again', function() {
        beforeEach(function() {
          clickOn(SC.CoreQuery('.centerColumn.middleRow'));
        });

        it('Then I should see that it is still player 2\'s turn', function() {
          expect(SC.CoreQuery('#whoseTurnIsIt').html()).toContain('Player 2\'s Turn');
        });

        it('Then the center cell should still belong to player 1', function() {
          expect(SC.CoreQuery('.centerColumn.middleRow')).toHaveClass('player1');
        });
      })
    });
  });
});