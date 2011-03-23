/*globals TicTacToe describe it expect xit xdescribe beforeEach afterEach spyOn runs waits waitsFor clickOn fillIn */

TicTacToe.mainStatechart.initStatechart();

describe("TicTacToe.mainStatechart", function() {
  var state,gotoStateSpy;
  describe("startGame state", function() {
    beforeEach(function() {
      state = TicTacToe.mainStatechart.getState('startGame');
    });

    describe("when it is entered", function() {
      var appendMainPaneSpy, createsGameSpy, setupGameSpy, game;
      beforeEach(function() {
        game = {set: function() {}};
        createsGameSpy = spyOn(TicTacToe.Game, 'createNewGame').andReturn(game);
        setupGameSpy = spyOn(TicTacToe.gameController, 'set');
        appendMainPaneSpy = spyOn(TicTacToe, 'appendMainPane');

        state.enterState();
      });

      it("creates a new game", function() {
        expect(createsGameSpy).toHaveBeenCalled();
      });

      it("assigns the new game as the current game", function() {
        expect(TicTacToe.currentGame).toBe(game);
      });

      it("assigns the new game for the view", function() {
        expect(setupGameSpy).toHaveBeenCalledWith('content', game);
      });

      it("appends the main page to the page", function() {
        expect(appendMainPaneSpy).toHaveBeenCalled();
      });

      it("transitions to the player1sTurn state", function() {
        expect(TicTacToe.mainStatechart.getState('player1sTurn').get('isCurrentState')).toBe(true);
      });
    });
  });

  describe("player1sTurn state", function() {
    beforeEach(function() {
      state = TicTacToe.mainStatechart.getState('player1sTurn');
      gotoStateSpy = spyOn(state, 'gotoState');
    });

    describe("when it is entered", function() {
      var setsPlayersTurnSpy;
      beforeEach(function() {
        TicTacToe.currentGame = { set: function() { }};
        setsPlayersTurnSpy = spyOn(TicTacToe.currentGame, 'set');

        state.enterState();
      });

      it("sets the current player to be player 1", function() {
        expect(setsPlayersTurnSpy).toHaveBeenCalledWith('currentPlayer', 1);
      });
    });

    describe("when it receives a mark cell message", function() {
      var currentCell, markCellSpy;

      describe("and the the game can mark the cell", function() {
        beforeEach(function() {
          TicTacToe.currentGame = TicTacToe.Game.create();
          currentCell = 'current cell';
          spyOn(TicTacToe.currentCellController, 'get').andReturn(currentCell);
          markCellSpy = spyOn(TicTacToe.currentGame, 'markCell').andReturn(YES);

          state.markCell();
        });

        it("sends the mark current cell as belonging to player 1 message", function() {
          expect(markCellSpy).toHaveBeenCalledWith(currentCell, 1);
        });

        it("transitions to player 2's turn", function() {
          expect(gotoStateSpy).toHaveBeenCalledWith('player2sTurn');
        });
      });

      describe("and the the game can not mark the cell", function() {
        beforeEach(function() {
          TicTacToe.currentGame = TicTacToe.Game.create();
          currentCell = 'current cell';
          spyOn(TicTacToe.currentCellController, 'get').andReturn(currentCell);
          markCellSpy = spyOn(TicTacToe.currentGame, 'markCell').andReturn(NO);

          state.markCell();
        });

        it("sends the mark current cell as belonging to player 1 message", function() {
          expect(markCellSpy).toHaveBeenCalledWith(currentCell, 1);
        });

        it("remains player 1's turn", function() {
          expect(gotoStateSpy).not.toHaveBeenCalled();
        });
      });
    });
  });

  describe("player2sTurn state", function() {
    beforeEach(function() {
      state = TicTacToe.mainStatechart.getState('player2sTurn');
      gotoStateSpy = spyOn(state, 'gotoState');
    });

    describe("when it is entered", function() {
      var setsPlayersTurnSpy;
      beforeEach(function() {
        TicTacToe.currentGame = { set: function() { }};
        setsPlayersTurnSpy = spyOn(TicTacToe.currentGame, 'set');

        state.enterState();
      });

      it("sets the current player to be player 2", function() {
        expect(setsPlayersTurnSpy).toHaveBeenCalledWith('currentPlayer', 2);
      });
    });

    describe("when it receives a mark cell message", function() {
      var currentCell, markCellSpy;

      describe("and the game can mark the cell", function() {
        beforeEach(function() {
          TicTacToe.currentGame = TicTacToe.Game.create();
          currentCell = 'current cell';
          spyOn(TicTacToe.currentCellController, 'get').andReturn(currentCell);
          markCellSpy = spyOn(TicTacToe.currentGame, 'markCell').andReturn(YES);

          state.markCell();
        });

        it("marks the current cell as belonging to player 2", function() {
          expect(markCellSpy).toHaveBeenCalledWith(currentCell, 2);
        });

        it("transitions to player 1's turn", function() {
          expect(gotoStateSpy).toHaveBeenCalledWith('player1sTurn');
        });
      });

      describe("and the game can not mark the cell", function() {
        beforeEach(function() {
          TicTacToe.currentGame = TicTacToe.Game.create();
          currentCell = 'current cell';
          spyOn(TicTacToe.currentCellController, 'get').andReturn(currentCell);
          markCellSpy = spyOn(TicTacToe.currentGame, 'markCell').andReturn(NO);

          state.markCell();
        });

        it("marks the current cell as belonging to player 2", function() {
          expect(markCellSpy).toHaveBeenCalledWith(currentCell, 2);
        });

        it("transitions to player 1's turn", function() {
          expect(gotoStateSpy).not.toHaveBeenCalledWith('player1sTurn');
        });
      });
    });
  });

  describe("endGame state", function() {
    beforeEach(function() {
      state = TicTacToe.mainStatechart.getState('endGame');
    });

    describe("when it is entered", function() {
      var mainPaneRemoveSpy, destroyGameSpy;
      TicTacToe.mainPane = SC.Object.create({
        remove: function () {}
      });
      
      beforeEach(function() {
        TicTacToe.currentGame = {destroy: function() {}};
        destroyGameSpy = spyOn(TicTacToe.currentGame, 'destroy');
        mainPaneRemoveSpy = spyOn(TicTacToe.mainPane, 'remove');

        state.enterState();
      });

      it("destroys the current game object", function() {
        expect(destroyGameSpy).toHaveBeenCalled();
      });

      it("appends the main page to the page", function() {
        expect(mainPaneRemoveSpy).toHaveBeenCalled();
      });
    });
  });
});
