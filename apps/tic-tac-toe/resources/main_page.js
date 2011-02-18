TicTacToe.mainPage = SC.Page.design({
  mainPane: SC.MainPane.design({
    childViews: 'gameView'.w(),

    gameView: TicTacToe.GameView.design({
      layout: {centerX: 0, centerY: 0, width: 500, height: 500},
      contentBinding: 'TicTacToe.gameController',

      childViews: 'gameBoard'.w(),

      gameBoard: TicTacToe.GameBoardView.design({
        layout: {centerX: 0, centerY: 0, width: 300, height: 300},
        contentBinding: 'TicTacToe.cellsController'
      })
    })
  })
});
