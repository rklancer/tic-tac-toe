TicTacToe.mainPage = SC.Page.design({
  mainPane: SC.MainPane.design({
    childViews: 'gameBoard'.w(),

    gameBoard: TicTacToe.GameBoardView.design({
      layout: {centerX: 0, centerY: 0, width: 300, height: 300},
      contentBinding: 'TicTacToe.gameBoardController'
    })
  })
});
