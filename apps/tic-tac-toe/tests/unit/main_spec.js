describe('TicTacToe.main', function() {
  var mainPaneAppendSpy, createsGameSpy, setupGameSpy, initializeStatechartSpy, game;
  beforeEach(function() {
    game = 'game';
    initializeStatechartSpy = spyOn(TicTacToe.mainStatechart, 'initStatechart');
    createsGameSpy = spyOn(TicTacToe.Game, 'createNewGame').andReturn(game);
    setupGameSpy = spyOn(TicTacToe.gameController, 'set');
    mainPaneAppendSpy = spyOn(TicTacToe.mainPage.get('mainPane'), 'append');
    TicTacToe.main();
  });

  afterEach(function(){
    TicTacToe.shutdown();
  });

  it('initializes the mainStatechart', function() {
    expect(initializeStatechartSpy).toHaveBeenCalled();
  });

});