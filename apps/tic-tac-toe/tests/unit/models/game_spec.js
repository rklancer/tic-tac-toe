describe('TicTacToe.Game', function() {
  describe('.createNewGame', function() {
    var game, board;
    beforeEach(function() {
      board = 'board';
      spyOn(TicTacToe.GameBoard, 'createInitialBoard').andReturn(board);
      game = TicTacToe.Game.createNewGame();
    });

    it('creates the initial game board', function() {
      expect(game.get('board')).toBe(board);
    });
  });
});