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
    },

    markCell: function() {
      TicTacToe.currentCellController.get('content').set('belongsToPlayer', 1);
      this.gotoState('player2sTurn');
    }
  }),

  player2sTurn: Ki.State.design({
    enterState: function() {
      TicTacToe.currentGame.set('currentPlayer', 2);
    },

    markCell: function() {
      TicTacToe.currentCellController.get('content').set('belongsToPlayer', 2);
      this.gotoState('player1sTurn');
    }
  }),

  endGame: Ki.State.design({
    enterState: function() {
      TicTacToe.currentGame.destroy();
      TicTacToe.mainPage.get('mainPane').remove();
    }
  })
});