TicTacToe.mainPage = SC.Page.design({
  mainPane: SC.MainPane.design({
    childViews: 'gameBoard'.w(),

    gameBoard: TicTacToe.GameBoardView.design({
      layout: {centerX: 0, centerY: 0, width: 400, height: 400},
      contentBinding: 'TicTacToe.gameBoardController'
    })
  })
});
