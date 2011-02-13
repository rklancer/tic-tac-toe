describe('TicTacToe.GameBoard', function() {
  var board;

  describe('when it is created', function() {
    beforeEach(function(){
      board = TicTacToe.GameBoard.create();
    });

    it('sets up an empty array for the cells', function() {
      expect(board.get('cells')).toEqual([]);
    });
  });

  describe('#setup', function() {
    beforeEach(function() {
      board = TicTacToe.GameBoard.create();
      board.setup();
    });

    it('adds 9 cells to the board', function(){
      expect(board.get('cells').length).toBe(9);
    });
  });
});