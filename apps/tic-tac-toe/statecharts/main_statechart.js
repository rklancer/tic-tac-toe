TicTacToe.mainStatechart = Ki.Statechart.create({
  initialState: 'startGame',

  startGame: Ki.State.design({
    enterState: function() {
      TicTacToe.currentGame = TicTacToe.Game.createNewGame();
      TicTacToe.gameController.set('content', TicTacToe.currentGame);
      TicTacToe.mainPage.get('mainPane').append();
      this.gotoState('player1sTurn');
    }
  }),

  player1sTurn: Ki.State.design({
    enterState: function() {
      TicTacToe.currentGame.set('currentPlayer', 1);
    }
  }),

  endGame: Ki.State.design({
    enterState: function() {
      TicTacToe.currentGame.destroy();
      TicTacToe.mainPage.get('mainPane').remove();
    }
  })
});