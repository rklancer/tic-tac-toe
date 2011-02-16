describe('Starting the game', function() {
  describe('When I launch the game', function() {
    beforeEach(function() {
      TicTacToe.main();
    });

    afterEach(function() {
      TicTacToe.shutdown();
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

//    it('Then I should see that it is player 1\'s turn', function() {
//      expect(SC.CoreQuery('#whoseTurnIsIt').html()).toContain('Player 1');
//    });
  });
});