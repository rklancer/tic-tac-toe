describe('TicTacToe.main', function() {
  var mainPaneAppendSpy, createsGameSpy, setupGameSpy, game;
  beforeEach(function() {
    game = 'game';
    createsGameSpy = spyOn(TicTacToe.Game, 'createNewGame').andReturn(game);
    setupGameSpy = spyOn(TicTacToe.gameController, 'set');
    mainPaneAppendSpy = spyOn(TicTacToe.mainPage.get('mainPane'), 'append');
    TicTacToe.main();
  });

  afterEach(function(){
    TicTacToe.shutdown();
  });

  it('creates a new game', function() {
    expect(createsGameSpy).toHaveBeenCalled();
  });

  it('assigns the new game for the view', function() {
    expect(setupGameSpy).toHaveBeenCalledWith('content', game);
  });

  it('appends the main page to the page', function() {
    expect(mainPaneAppendSpy).toHaveBeenCalled();
  });
});