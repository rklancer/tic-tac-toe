describe('TicTacToe.main', function() {
  var mainPaneAppendSpy, createsGameBoardSpy, assignGameBoardSpy, gameBoard, setupGameBoardSpy;
  beforeEach(function() {
    gameBoard = TicTacToe.GameBoard.create();
    mainPaneAppendSpy = spyOn(TicTacToe.mainPage.get('mainPane'), 'append');
    createsGameBoardSpy = spyOn(TicTacToe.GameBoard, 'createInitialBoard').andReturn(gameBoard);
    assignGameBoardSpy = spyOn(TicTacToe.gameBoardController, 'set');
    TicTacToe.main();
  });

  afterEach(function(){
    TicTacToe.mainPage.get('mainPane').remove();
  });

  it('creates the initial game board', function() {
    expect(createsGameBoardSpy).toHaveBeenCalled();
  });

  it('assigns the gameBoard for the view', function() {
    expect(assignGameBoardSpy).toHaveBeenCalledWith('content', gameBoard);
  });

  it('appends the main page to the page', function() {
    expect(mainPaneAppendSpy).toHaveBeenCalled();
  });
});