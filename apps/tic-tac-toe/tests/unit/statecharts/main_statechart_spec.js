describe('TicTacToe.mainStatechart', function() {
  var state;
  describe('startGame state', function() {
    beforeEach(function() {
      state = TicTacToe.mainStatechart.getState('startGame');
    });

    describe('when it is entered', function() {
      var mainPaneAppendSpy, createsGameSpy, setupGameSpy, game;
      beforeEach(function() {
        game = {set: function() {}};
        createsGameSpy = spyOn(TicTacToe.Game, 'createNewGame').andReturn(game);
        setupGameSpy = spyOn(TicTacToe.gameController, 'set');
        mainPaneAppendSpy = spyOn(TicTacToe.mainPage.get('mainPane'), 'append');

        state.enterState();
      });

      it('creates a new game', function() {
        expect(createsGameSpy).toHaveBeenCalled();
      });

      it('assigns the new game as the current game', function() {
        expect(TicTacToe.currentGame).toBe(game);
      });

      it('assigns the new game for the view', function() {
        expect(setupGameSpy).toHaveBeenCalledWith('content', game);
      });

      it('appends the main page to the page', function() {
        expect(mainPaneAppendSpy).toHaveBeenCalled();
      });

      it('transitions to the player1sTurn state', function() {
        expect(TicTacToe.mainStatechart.getState('player1sTurn').get('isCurrentState')).toBe(true);
      });
    });
  });

  describe('player1sTurn state', function() {
    beforeEach(function() {
      state = TicTacToe.mainStatechart.getState('player1sTurn');
    });

    describe('when it is entered', function() {
      var setsPlayersTurnSpy;
      beforeEach(function() {
        TicTacToe.currentGame = { set: function() { }};
        setsPlayersTurnSpy = spyOn(TicTacToe.currentGame, 'set');

        state.enterState();
      });

      it('sets the current player to be player 1', function() {
        expect(setsPlayersTurnSpy).toHaveBeenCalledWith('currentPlayer', 1);
      });
    });

    describe('when a cell is marked', function() {
      var currentCell, markCellSpy;

      beforeEach(function() {
        currentCell = {set: function() {}};
        spyOn(TicTacToe.currentCellController, 'get').andReturn(currentCell);
        markCellSpy = spyOn(currentCell, 'set');

        state.markCell();
      });

      it('marks the current cell as belonging to player 1', function() {
        expect(markCellSpy).toHaveBeenCalledWith('belongsToPlayer', 1);
      });

      it('transitions to player 2\'s turn', function() {
        expect(TicTacToe.mainStatechart.getState('player2sTurn').get('isCurrentState')).toBe(true);
      });
    });
  });

  describe('endGame state', function() {
    beforeEach(function() {
      state = TicTacToe.mainStatechart.getState('endGame');
    });

    describe('when it is entered', function() {
      var mainPaneRemoveSpy, destroyGameSpy;
      beforeEach(function() {
        TicTacToe.currentGame = {destroy: function() {}};
        destroyGameSpy = spyOn(TicTacToe.currentGame, 'destroy');
        mainPaneRemoveSpy = spyOn(TicTacToe.mainPage.get('mainPane'), 'remove');

        state.enterState();
      });

      it('destroys the current game object', function() {
        expect(destroyGameSpy).toHaveBeenCalled();
      });

      it('appends the main page to the page', function() {
        expect(mainPaneRemoveSpy).toHaveBeenCalled();
      });
    });
  });

  describe('player2sTurn state', function() {
    beforeEach(function() {
      state = TicTacToe.mainStatechart.getState('player2sTurn');
    });

    describe('when it is entered', function() {
      var setsPlayersTurnSpy;
      beforeEach(function() {
        TicTacToe.currentGame = { set: function() { }};
        setsPlayersTurnSpy = spyOn(TicTacToe.currentGame, 'set');

        state.enterState();
      });

      it('sets the current player to be player 2', function() {
        expect(setsPlayersTurnSpy).toHaveBeenCalledWith('currentPlayer', 2);
      });
    });

    describe('when a cell is marked', function() {
      var currentCell, markCellSpy;

      beforeEach(function() {
        currentCell = {set: function() {}};
        spyOn(TicTacToe.currentCellController, 'get').andReturn(currentCell);
        markCellSpy = spyOn(currentCell, 'set');

        state.markCell();
      });

      it('marks the current cell as belonging to player 2', function() {
        expect(markCellSpy).toHaveBeenCalledWith('belongsToPlayer', 2);
      });

      it('transitions to player 1\'s turn', function() {
        expect(TicTacToe.mainStatechart.getState('player1sTurn').get('isCurrentState')).toBe(true);
      });
    });
  });
});
