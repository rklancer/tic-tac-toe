/*globals TicTacToe Ki */

sc_require('tic-tac-toe');

TicTacToe.mainStatechart = Ki.Statechart.create({
  initialState: 'startGame',
  
  startGame: Ki.State.design({
    enterState: function () {
      TicTacToe.currentGame = TicTacToe.Game.createNewGame();
      TicTacToe.gameController.set('content', TicTacToe.currentGame);
      TicTacToe.appendMainPane();
      this.gotoState('player1sTurn');
    }
  }),
  
  player1sTurn: Ki.State.design({
    enterState: function () {
      TicTacToe.currentGame.set('currentPlayer', 1);
    },
    
    markCell: function () {
      if (TicTacToe.currentGame.markCell(TicTacToe.currentCellController.get('currentCell'), 1)) {
        this.gotoState('player2sTurn');
      }
      return YES;
    }
  }),
  
  player2sTurn: Ki.State.design({
    enterState: function () {
      TicTacToe.currentGame.set('currentPlayer', 2);
    },
    
    markCell: function () {
      if (TicTacToe.currentGame.markCell(TicTacToe.currentCellController.get('currentCell'), 2)) {
        this.gotoState('player1sTurn');
      }
      return YES;
    }
  }),
  
  endGame: Ki.State.design()
});

// TicTacToe.mainStatechart = Ki.Statechart.create({
//   initialState: 'startGame',
// 
//   startGame: Ki.State.design({
//     enterState: function() {
//       TicTacToe.currentGame = TicTacToe.Game.createNewGame();
//       TicTacToe.gameController.set('content', TicTacToe.currentGame);
//       TicTacToe.mainPage.get('mainPane').append();
//       this.gotoState('player1sTurn');
//     }
//   }),
// 
//   player1sTurn: Ki.State.design({
//     enterState: function() {
//       TicTacToe.currentGame.set('currentPlayer', 1);
//     },
// 
//     markCell: function() {
//       var currentCell = TicTacToe.currentCellController.get('content');
//       if(TicTacToe.currentGame.markCell(currentCell, 1)) this.gotoState('player2sTurn');
//     }
//   }),
// 
//   player2sTurn: Ki.State.design({
//     enterState: function() {
//       TicTacToe.currentGame.set('currentPlayer', 2);
//     },
// 
//     markCell: function() {
//       var currentCell = TicTacToe.currentCellController.get('content');
//       if(TicTacToe.currentGame.markCell(currentCell, 2)) this.gotoState('player1sTurn');
//     }
//   }),
// 
//   endGame: Ki.State.design({
//     enterState: function() {
//       TicTacToe.currentGame.destroy();
//       TicTacToe.mainPage.get('mainPane').remove();
//     }
//   })
// });