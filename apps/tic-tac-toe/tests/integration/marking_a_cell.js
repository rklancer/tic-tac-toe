/*globals TicTacToe describe it expect xit xdescribe beforeEach afterEach spyOn runs waits waitsFor clickOn fillIn */

describe('Marking cells', function() {
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
        clickOn($('.centerColumn.middleRow'));
      });

      it('Then I should see that it is the player 2\'s turn', function() {
        expect($('#whoseTurnIsIt').html()).toContain('Player 2\'s Turn');
      });

      it('Then I should see that the center cell is marked as belonging to player 1', function() {
        expect($('.centerColumn.middleRow')).toHaveClass('player1');
      });

      describe('When I mark the top left cell', function() {
        beforeEach(function() {
          clickOn($('.leftColumn.topRow'));
        });

        it('Then I should see that it is player 1\'s turn', function() {
          expect($('#whoseTurnIsIt').html()).toContain('Player 1\'s Turn');
        });

        it('Then I should see that the top left cell is marked as belonging to player 2', function() {
          expect($('.leftColumn.topRow')).toHaveClass('player2');
        });
      });
    });
  });
});