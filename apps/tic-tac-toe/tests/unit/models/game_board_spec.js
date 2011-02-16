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

  describe('.createInitialBoard', function() {
    var createsGameBoardSpy, setupGameBoardSpy, rtnVal;
    beforeEach(function() {
      board = TicTacToe.GameBoard.create();
      createsGameBoardSpy = spyOn(TicTacToe.GameBoard, 'create').andReturn(board);
      setupGameBoardSpy = spyOn(board, 'setup');
      rtnVal = TicTacToe.GameBoard.createInitialBoard();
    });

    it('creates a gameBoard for the game', function() {
      expect(createsGameBoardSpy).toHaveBeenCalled();
    });

    it('sets up the gameBoard', function() {
      expect(setupGameBoardSpy).toHaveBeenCalled();
    });

    it('returns the created gameBoard', function(){
      expect(rtnVal).toEqual(board);
    });
  });
});