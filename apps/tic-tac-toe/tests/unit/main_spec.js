/*globals TicTacToe describe it expect xit xdescribe beforeEach afterEach spyOn runs waits waitsFor clickOn fillIn */

describe('TicTacToe.main', function() {
  var initializeStatechartSpy;
  beforeEach(function() {
    initializeStatechartSpy = spyOn(TicTacToe.mainStatechart, 'initStatechart');
    TicTacToe.main();
  });

  afterEach(function(){
    TicTacToe.mainStatechart.gotoState('endGame');
  });

  it('initializes the mainStatechart', function() {
    expect(initializeStatechartSpy).toHaveBeenCalled();
  });

});